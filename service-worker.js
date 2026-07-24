const CACHE_VERSION = "azbuka-v3";
const CORE_CACHE = `${CACHE_VERSION}-core`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const APP_BASE = new URL("./", self.registration.scope);

const CORE_ASSETS = [
    "./index.html",
    "./style.css",
    "./app.js",
    "./audio.js",
    "./dictionary.json",
    "./manifest.webmanifest",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png"
].map((path) => new URL(path, APP_BASE).href);

self.addEventListener("install", (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CORE_CACHE);

        await Promise.all(CORE_ASSETS.map(async (url) => {
            try {
                const response = await fetch(url, { cache: "reload" });

                if (response.ok) {
                    await cache.put(url, response);
                }
            } catch (error) {
                console.warn("Не удалось добавить ресурс в предварительный кэш:", url, error);
            }
        }));

        await self.skipWaiting();
    })());
});

self.addEventListener("activate", (event) => {
    event.waitUntil((async () => {
        const activeCaches = new Set([CORE_CACHE, RUNTIME_CACHE]);
        const cacheNames = await caches.keys();

        await Promise.all(cacheNames.map((cacheName) => {
            if (cacheName.startsWith("azbuka-") && !activeCaches.has(cacheName)) {
                return caches.delete(cacheName);
            }

            return Promise.resolve(false);
        }));

        await self.clients.claim();
    })());
});

async function networkFirstHtml(request) {
    try {
        const response = await fetch(request);

        if (response.ok) {
            const cache = await caches.open(RUNTIME_CACHE);
            await cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        const cachedPage = await caches.match(request);

        if (cachedPage) {
            return cachedPage;
        }

        const cachedIndex = await caches.match(new URL("./index.html", APP_BASE).href);

        if (cachedIndex) {
            return cachedIndex;
        }

        return Response.error();
    }
}

async function staleWhileRevalidate(request) {
    const cachedResponse = await caches.match(request);
    const updatePromise = fetch(request).then(async (response) => {
        if (response.ok) {
            try {
                const cache = await caches.open(RUNTIME_CACHE);
                await cache.put(request, response.clone());
            } catch (error) {
                console.warn("Ресурс получен, но не сохранён в кэше:", request.url, error);
            }
        }

        return response;
    }).catch(() => null);

    if (cachedResponse) {
        return cachedResponse;
    }

    return (await updatePromise) || Response.error();
}

self.addEventListener("fetch", (event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (request.method !== "GET"
        || url.origin !== self.location.origin
        || !url.pathname.startsWith(APP_BASE.pathname)) {
        return;
    }

    if (request.headers.has("range")) {
        return;
    }

    if (request.mode === "navigate" || request.headers.get("accept")?.includes("text/html")) {
        event.respondWith(networkFirstHtml(request));
        return;
    }

    const cacheableDestinations = new Set(["image", "audio", "style", "script"]);
    const isDictionary = url.href === new URL("./dictionary.json", APP_BASE).href;
    const isManifest = url.href === new URL("./manifest.webmanifest", APP_BASE).href;

    if (cacheableDestinations.has(request.destination) || isDictionary || isManifest) {
        event.respondWith(staleWhileRevalidate(request));
    }
});
