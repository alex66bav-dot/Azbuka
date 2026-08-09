import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webDir = path.join(projectRoot, "www");
const demoMode = process.argv.includes("--demo");
const files = [
  "index.html",
  "style.css",
  "app.js",
  "audio.js",
  "dictionary.json",
  "manifest.webmanifest",
  "service-worker.js"
];

await rm(webDir, { recursive: true, force: true });
await mkdir(webDir, { recursive: true });

for (const file of files) {
  await cp(path.join(projectRoot, file), path.join(webDir, file));
}

await cp(path.join(projectRoot, "assets"), path.join(webDir, "assets"), {
  recursive: true
});

if (demoMode) {
  const indexPath = path.join(webDir, "index.html");
  const appScript = '<script src="app.js"></script>';
  const demoBootstrap = [
    "<script>",
    'history.replaceState(null, "", "?demo=1");',
    "</script>",
    appScript
  ].join("\n");
  const indexHtml = await readFile(indexPath, "utf8");

  if (!indexHtml.includes(appScript)) {
    throw new Error("Could not find the app.js script tag in www/index.html.");
  }

  await writeFile(indexPath, indexHtml.replace(appScript, demoBootstrap), "utf8");
}

console.log(`${demoMode ? "Android demo" : "Web"} assets copied to www.`);
