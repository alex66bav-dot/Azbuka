import { access, cp, mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const russianImagesRoot = path.join(projectRoot, "assets", "images", "letters");
const englishImagesRoot = path.join(projectRoot, "assets", "images", "en-us");
const englishDataPath = path.join(projectRoot, "languages", "en-us.js");
const missingManifestPath = path.join(projectRoot, "languages", "en-us-missing-images.json");
// These Russian folders contain printed words, not language-neutral pictures.
const russianTextCardFolders = new Set(["hard-sign", "yery", "soft-sign"]);

async function collectWebpFiles(directory, result = []) {
    const entries = await readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory() && !russianTextCardFolders.has(entry.name)) {
            await collectWebpFiles(entryPath, result);
        } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".webp")) {
            result.push(entryPath);
        }
    }

    return result;
}

async function loadEnglishPack() {
    const source = await import("node:fs/promises").then(({ readFile }) => readFile(englishDataPath, "utf8"));
    const context = { window: {} };
    vm.createContext(context);
    vm.runInContext(source, context, { filename: englishDataPath });
    return context.window.AzbukaLanguages["en-US"];
}

const aliases = Object.freeze({
    butterfly: "babochka"
});

const existingImages = await collectWebpFiles(russianImagesRoot);
const imagesByBaseName = new Map();

for (const imagePath of existingImages) {
    const baseName = path.basename(imagePath, ".webp").toLowerCase();
    if (!imagesByBaseName.has(baseName)) {
        imagesByBaseName.set(baseName, imagePath);
    }
}

const pack = await loadEnglishPack();
const missing = [];
let reused = 0;

for (const letterData of pack.alphabet) {
    if (pack.textOnlyLetters && pack.textOnlyLetters.includes(letterData.letter)) {
        continue;
    }

    for (const word of letterData.words) {
        const slug = path.basename(word.image, ".webp");
        const sourceSlug = aliases[slug] || slug;
        const sourcePath = imagesByBaseName.get(sourceSlug);
        const targetPath = path.join(projectRoot, word.image);

        try {
            await access(targetPath);
            reused += 1;
            continue;
        } catch (error) {
            // The target has not been prepared yet.
        }

        if (!sourcePath) {
            missing.push({ letter: letterData.letter, word: word.text, image: word.image });
            continue;
        }

        await mkdir(path.dirname(targetPath), { recursive: true });
        await cp(sourcePath, targetPath);
        reused += 1;
    }
}

await writeFile(missingManifestPath, `${JSON.stringify(missing, null, 2)}\n`, "utf8");
console.log(`Reused images: ${reused}`);
console.log(`Missing images: ${missing.length}`);
console.log(`Manifest: ${path.relative(projectRoot, missingManifestPath)}`);
