package com.azbuka.app;

import android.os.Handler;
import android.os.Looper;

import androidx.annotation.NonNull;

import com.android.billingclient.api.AcknowledgePurchaseParams;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.PendingPurchasesParams;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.android.billingclient.api.QueryPurchasesParams;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Collections;
import java.util.List;

@CapacitorPlugin(name = "AzbukaBilling")
public class AzbukaBillingPlugin extends Plugin implements PurchasesUpdatedListener {
    private static final String PRODUCT_ID = "azbuka_full_access";
    private static final long INITIAL_RECONNECT_DELAY_MS = 2_000L;
    private static final long MAX_RECONNECT_DELAY_MS = 30_000L;

    private final Handler mainHandler = new Handler(Looper.getMainLooper());
    private BillingClient billingClient;
    private ProductDetails fullAccessProduct;
    private boolean fullAccess;
    private boolean connecting;
    private long reconnectDelayMs = INITIAL_RECONNECT_DELAY_MS;

    private final Runnable reconnectRunnable = this::connectBilling;

    @Override
    public void load() {
        billingClient = BillingClient.newBuilder(getContext())
            .setListener(this)
            .enablePendingPurchases(
                PendingPurchasesParams.newBuilder().enableOneTimeProducts().build()
            )
            .enableAutoServiceReconnection()
            .build();
        connectBilling();
    }

    @PluginMethod
    public void getEntitlement(PluginCall call) {
        call.resolve(createState("current"));
    }

    @PluginMethod
    public void purchaseFullAccess(PluginCall call) {
        mainHandler.post(() -> launchPurchase(call));
    }

    @Override
    protected void handleOnResume() {
        if (billingClient == null || !billingClient.isReady()) {
            connectBilling();
            return;
        }
        queryExistingPurchases();
    }

    @Override
    protected void handleOnDestroy() {
        mainHandler.removeCallbacks(reconnectRunnable);
        if (billingClient != null) {
            billingClient.endConnection();
        }
    }

    @Override
    public void onPurchasesUpdated(
        @NonNull BillingResult billingResult,
        List<Purchase> purchases
    ) {
        int responseCode = billingResult.getResponseCode();
        if (responseCode == BillingClient.BillingResponseCode.OK && purchases != null) {
            processPurchases(purchases, false);
            return;
        }

        if (responseCode == BillingClient.BillingResponseCode.USER_CANCELED) {
            emitState("canceled");
            return;
        }

        emitState("error");
    }

    private synchronized void connectBilling() {
        if (billingClient == null || billingClient.isReady() || connecting) {
            return;
        }

        connecting = true;
        mainHandler.removeCallbacks(reconnectRunnable);
        billingClient.startConnection(new BillingClientStateListener() {
            @Override
            public void onBillingSetupFinished(@NonNull BillingResult billingResult) {
                connecting = false;
                if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                    reconnectDelayMs = INITIAL_RECONNECT_DELAY_MS;
                    queryFullAccessProduct(null);
                    queryExistingPurchases();
                } else {
                    emitState("unavailable");
                    scheduleReconnect();
                }
            }

            @Override
            public void onBillingServiceDisconnected() {
                connecting = false;
                fullAccessProduct = null;
                emitState("disconnected");
                scheduleReconnect();
            }
        });
    }

    private synchronized void scheduleReconnect() {
        mainHandler.removeCallbacks(reconnectRunnable);
        mainHandler.postDelayed(reconnectRunnable, reconnectDelayMs);
        reconnectDelayMs = Math.min(reconnectDelayMs * 2, MAX_RECONNECT_DELAY_MS);
    }

    private void queryExistingPurchases() {
        if (billingClient == null || !billingClient.isReady()) {
            connectBilling();
            return;
        }

        QueryPurchasesParams params = QueryPurchasesParams.newBuilder()
            .setProductType(BillingClient.ProductType.INAPP)
            .build();
        billingClient.queryPurchasesAsync(params, (billingResult, purchases) -> {
            if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                processPurchases(purchases, true);
            } else {
                emitState("error");
            }
        });
    }

    private void processPurchases(List<Purchase> purchases, boolean completeSnapshot) {
        Purchase purchasedFullAccess = null;
        boolean hasPendingFullAccess = false;

        for (Purchase purchase : purchases) {
            if (!purchase.getProducts().contains(PRODUCT_ID)) {
                continue;
            }
            if (purchase.getPurchaseState() == Purchase.PurchaseState.PURCHASED) {
                purchasedFullAccess = purchase;
                break;
            }
            if (purchase.getPurchaseState() == Purchase.PurchaseState.PENDING) {
                hasPendingFullAccess = true;
            }
        }

        if (purchasedFullAccess != null) {
            acknowledgeAndGrant(purchasedFullAccess);
        } else if (completeSnapshot) {
            setFullAccess(false, hasPendingFullAccess ? "pending" : "not_purchased");
        } else if (hasPendingFullAccess) {
            setFullAccess(false, "pending");
        }
    }

    private void acknowledgeAndGrant(Purchase purchase) {
        if (purchase.isAcknowledged()) {
            setFullAccess(true, "purchased");
            return;
        }

        AcknowledgePurchaseParams params = AcknowledgePurchaseParams.newBuilder()
            .setPurchaseToken(purchase.getPurchaseToken())
            .build();
        billingClient.acknowledgePurchase(params, billingResult -> {
            if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                setFullAccess(true, "purchased");
            } else {
                setFullAccess(false, "acknowledgement_error");
                mainHandler.postDelayed(this::queryExistingPurchases, reconnectDelayMs);
            }
        });
    }

    private void launchPurchase(PluginCall call) {
        if (billingClient == null || !billingClient.isReady()) {
            connectBilling();
            call.reject("Google Play временно недоступен. Попробуйте ещё раз.");
            return;
        }

        if (fullAccess) {
            call.resolve(createState("already_purchased"));
            return;
        }

        if (fullAccessProduct == null) {
            queryFullAccessProduct(call);
            return;
        }

        launchBillingFlow(call, fullAccessProduct);
    }

    private void queryFullAccessProduct(PluginCall purchaseCall) {
        QueryProductDetailsParams.Product product = QueryProductDetailsParams.Product.newBuilder()
            .setProductId(PRODUCT_ID)
            .setProductType(BillingClient.ProductType.INAPP)
            .build();
        QueryProductDetailsParams params = QueryProductDetailsParams.newBuilder()
            .setProductList(Collections.singletonList(product))
            .build();

        billingClient.queryProductDetailsAsync(params, (billingResult, result) -> {
            if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                List<ProductDetails> details = result.getProductDetailsList();
                fullAccessProduct = details.stream()
                    .filter(item -> PRODUCT_ID.equals(item.getProductId()))
                    .findFirst()
                    .orElse(null);
            } else {
                fullAccessProduct = null;
            }

            if (purchaseCall == null) {
                return;
            }
            if (fullAccessProduct == null) {
                purchaseCall.reject("Покупка сейчас недоступна. Попробуйте позже.");
                return;
            }
            mainHandler.post(() -> launchBillingFlow(purchaseCall, fullAccessProduct));
        });
    }

    private void launchBillingFlow(PluginCall call, ProductDetails productDetails) {
        BillingFlowParams.ProductDetailsParams productParams =
            BillingFlowParams.ProductDetailsParams.newBuilder()
                .setProductDetails(productDetails)
                .build();
        BillingFlowParams flowParams = BillingFlowParams.newBuilder()
            .setProductDetailsParamsList(Collections.singletonList(productParams))
            .build();
        BillingResult result = billingClient.launchBillingFlow(getActivity(), flowParams);

        if (result.getResponseCode() == BillingClient.BillingResponseCode.OK) {
            JSObject response = createState("launched");
            call.resolve(response);
        } else {
            call.reject("Не удалось открыть Google Play. Попробуйте ещё раз.");
        }
    }

    private void setFullAccess(boolean granted, String status) {
        fullAccess = granted;
        emitState(status);
    }

    private JSObject createState(String status) {
        JSObject data = new JSObject();
        data.put("fullAccess", fullAccess);
        data.put("status", status);
        data.put("ready", billingClient != null && billingClient.isReady());
        return data;
    }

    private void emitState(String status) {
        notifyListeners("entitlementChanged", createState(status), true);
    }
}
