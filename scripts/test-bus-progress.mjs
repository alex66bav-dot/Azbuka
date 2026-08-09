import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../app.js", import.meta.url), "utf8");
const match = source.match(/function getNextBusProgress\(candidateProgress\) \{[\s\S]*?\n\}/);
const routeMatch = source.match(/function getBusRouteFromStartDelta\(deltaX, deltaY\) \{[\s\S]*?\n\}/);

assert.ok(match, "getNextBusProgress must exist in app.js");
assert.ok(routeMatch, "getBusRouteFromStartDelta must exist in app.js");
assert.doesNotMatch(
    source,
    /nearestSample\.progress\s*<\s*busProgress/,
    "backward pointer movement must not be rejected by the previous progress"
);

const context = {};
vm.runInNewContext(
    `${match[0]}; ${routeMatch[0]}; this.getNextBusProgress = getNextBusProgress; this.getBusRouteFromStartDelta = getBusRouteFromStartDelta;`,
    context
);

assert.equal(context.getNextBusProgress(0.75), 0.75, "forward progress must be preserved");
assert.equal(context.getNextBusProgress(0.18), 0.18, "backward progress must be allowed");
assert.equal(context.getNextBusProgress(0.02), 0, "returning to Start must reset progress");
assert.equal(context.getBusRouteFromStartDelta(15, -15), null, "movement inside the 24px neutral zone must not choose a route");
assert.equal(context.getBusRouteFromStartDelta(20, -25), 0, "a vertically dominant upward gesture must choose the top route");
assert.equal(context.getBusRouteFromStartDelta(20, 25), 2, "a vertically dominant downward gesture must choose the bottom route");
assert.equal(context.getBusRouteFromStartDelta(32, 8), 1, "a clearly rightward gesture must choose the middle route");
assert.equal(context.getBusRouteFromStartDelta(-28, 4), null, "a leftward gesture must not choose the middle route");

console.log("Bus diagnostics passed: backward progress, Start reset, and directional branch choice.");
