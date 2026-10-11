import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = await readFile(path.join(projectRoot, "languages", "en-us.js"), "utf8");
const context = { window: {} };

vm.createContext(context);
vm.runInContext(source, context, { filename: "languages/en-us.js" });

const pack = context.window.AzbukaLanguages["en-US"];
const fail = (message) => {
    throw new Error(message);
};

if (!pack || pack.alphabet.length !== 26) {
    fail("The English alphabet must contain 26 letters.");
}

if (pack.alphabet.some(({ words }) => words.length !== 5)) {
    fail("Every English letter must contain exactly five display words.");
}

const textOnlyLetters = new Set(pack.textOnlyLetters || []);
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
const russianTextCardHashes = new Set();
for (const folder of ["hard-sign", "yery", "soft-sign"]) {
    const directory = path.join(projectRoot, "assets/images/letters", folder);
    for (const file of await readdir(directory)) {
        if (file.endsWith(".webp")) {
            russianTextCardHashes.add(digest(await readFile(path.join(directory, file))));
        }
    }
}

for (const letterData of pack.alphabet) {
    if (textOnlyLetters.has(letterData.letter)) {
        continue;
    }

    for (const word of letterData.words) {
        if (/[а-яё]/i.test(word.text) || !word.image.startsWith("assets/images/en-us/")) {
            fail(`Non-English card in ${letterData.letter}: ${word.text}`);
        }
        for (const root of [projectRoot, path.join(projectRoot, "www")]) {
            const image = await readFile(path.join(root, word.image));
            if (russianTextCardHashes.has(digest(image))) {
                fail(`Russian text image used for ${word.text}: ${path.join(root, word.image)}`);
            }
        }
    }
}

const xWords = Array.from(pack.containedLetterWordPools.X);
const xDistractors = Array.from(pack.exclusiveDistractorWordPools.X);
const allDisplayWords = new Set(pack.alphabet.flatMap(({ words }) =>
    Array.from(words, ({ text }) => text.toLowerCase())
));

if (xWords.length !== 5 || xWords.some((word) => !word.toLowerCase().includes("x"))) {
    fail("X must have exactly five correct words, and every word must contain X.");
}

if (xDistractors.length !== 10 || xDistractors.some((word) => word.toLowerCase().includes("x"))) {
    fail("X must have exactly ten exclusive distractors without X.");
}

if (new Set(xDistractors.map((word) => word.toLowerCase())).size !== xDistractors.length) {
    fail("The exclusive X distractors must be unique.");
}

if (xDistractors.some((word) => allDisplayWords.has(word.toLowerCase()))) {
    fail("The exclusive X distractors must not be used by another letter.");
}

console.log("English pack valid: 26 letters, 125 images, text-only X, 10 exclusive distractors.");
