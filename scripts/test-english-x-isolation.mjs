import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import vm from "node:vm";

const projectRoot = new URL("../", import.meta.url);
const packSource = await readFile(new URL("languages/en-us.js", projectRoot), "utf8");
const functionNames = [
    "getAccessibleAlphabet", "isSpecialLetter", "createSpecialWordItem", "createTextOnlyWord",
    "getCorrectSpecialWords", "getOtherSpecialWords", "buildSpecialWordSet",
    "getOrdinaryGameWords", "buildFindObjectRound", "isCorrectFindObjectWord",
    "buildConnectLineRound", "getNextBusWord", "buildBusRound", "shuffleArray"
];

function makeGame(source, language, demo = false) {
    let seed = 12345;
    const math = Object.create(Math);
    math.random = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32);
    const context = vm.createContext({
        window: {}, document: { addEventListener() {} }, Math: math,
        localStorage: { getItem: () => language }
    });
    vm.runInContext(packSource, context);
    vm.runInContext(source.slice(0, source.indexOf("let FREE_LETTERS")), context);
    for (const name of functionNames) {
        const definition = source.match(new RegExp(`^function ${name}\\([^]*?^\\}`, "m"));
        // The pre-fix source has no ordinary-game filter.
        if (name === "getOrdinaryGameWords" && !definition) continue;
        assert.ok(definition, `Missing ${name}`);
        vm.runInContext(definition[0], context);
    }
    vm.runInContext(`
        const lastSpecialFindSets = new Map();
        const lastSpecialConnectSets = new Map();
        const lastBusSets = new Map();
        const lastBusWords = new Map();
        function isLetterUnlocked(letter) {
            return ${!demo} || currentLanguagePack.freeLetters.includes(letter);
        }
        globalThis.pack = currentLanguagePack;
        globalThis.rounds = (letter) => [
            buildFindObjectRound(letter).map(word => ({word, isCorrect: isCorrectFindObjectWord(word, letter)})),
            buildConnectLineRound(letter),
            buildBusRound(letter)
        ];
    `, context);
    return context;
}

const baselinePath = process.argv[2];
const baseline = baselinePath ? await readFile(baselinePath, "utf8") : null;
for (const root of ["", "www/"]) {
    const source = await readFile(new URL(`${root}app.js`, projectRoot), "utf8");
    const game = makeGame(source, "en-US");
    const reserved = new Set([
        ...game.pack.containedLetterWordPools.X,
        ...game.pack.exclusiveDistractorWordPools.X
    ].map(text => text.toLowerCase()));
    assert.equal(reserved.size, 15);
    const overlaps = game.pack.alphabet.filter(item => item.letter !== "X").flatMap(letter =>
        Array.from(letter.words).filter(word => reserved.has(word.text.toLowerCase()))
            .map(word => `${letter.letter}/${word.text}`)
    );
    assert.deepEqual(Array.from(overlaps), ["F/Fox"]);
    console.log(`${root || "root/"}X/native word overlaps: ${overlaps.join(", ")}`);
    const images = new Set();
    for (const letter of game.pack.alphabet.filter(item => item.letter !== "X")) {
        const ownWords = new Set(letter.words.map(word => word.text));
        const seenCorrect = [new Set(), new Set(), new Set()];
        assert.equal(game.getOrdinaryGameWords(letter), letter.words,
            `${letter.letter}: preserve the complete native word pool`);
        for (let iteration = 0; iteration < 100; iteration++) {
            const rounds = game.rounds(letter);
            assert.deepEqual(Array.from(rounds, round => round.length), [6, 8, 3]);
            assert.deepEqual(Array.from(rounds, round => round.filter(item => item.isCorrect).length), [2, 2, 1]);
            for (const [mode, round] of rounds.entries()) for (const { word, isCorrect } of round) {
                if (!isCorrect) {
                    assert.ok(!reserved.has(word.text.toLowerCase()), `${root}${letter.letter}: leaked distractor ${word.text}`);
                }
                assert.match(word.image, /^assets\/images\/en-us\/(?!x\/)/);
                assert.doesNotMatch(word.text, /[а-яё]/i);
                if (isCorrect) {
                    assert.ok(ownWords.has(word.text));
                    seenCorrect[mode].add(word.text);
                }
                images.add(word.image);
            }
        }
        for (const [mode, seen] of seenCorrect.entries()) {
            assert.deepEqual([...seen].sort(), [...ownWords].sort(),
                `${root}${letter.letter}: all five native words must appear in mode ${mode}`);
        }
        if (["B", "C", "H", "Z", "F"].includes(letter.letter)) {
            console.log(`${root || "root/"}${letter.letter}: 300 rounds, all five native words in each mode; no X distractors`);
        }
    }
    for (const image of images) await access(new URL(root + image, projectRoot));

    // Native overlap words remain correct candidates, but never become foreign distractors.
    const b = game.pack.alphabet.find(item => item.letter === "B");
    const originalWords = b.words.slice();
    b.words.push(...Array.from(reserved, text => ({ text, image: "should-not-be-used.webp" })));
    assert.equal(game.getOrdinaryGameWords(b), b.words);
    const filtered = game.getOrdinaryGameWords(b, true);
    assert.deepEqual(Array.from(filtered, word => word.text), Array.from(originalWords, word => word.text));
    b.words.splice(0, b.words.length, ...originalWords);

    const demo = makeGame(source, "en-US", true);
    for (const letter of demo.pack.alphabet.filter(item => ["A", "B", "C"].includes(item.letter))) {
        for (const round of demo.rounds(letter)) for (const { word } of round) {
            assert.ok(!reserved.has(word.text.toLowerCase()));
            assert.match(word.image, /^assets\/images\/en-us\/[abc]\//);
        }
    }

    const xGame = makeGame(source, "en-US");
    const x = xGame.pack.alphabet.find(item => item.letter === "X");
    const correctX = new Set(xGame.pack.containedLetterWordPools.X);
    const wrongX = new Set(xGame.pack.exclusiveDistractorWordPools.X);
    const seenX = [new Set(), new Set(), new Set()];
    for (let iteration = 0; iteration < 100; iteration++) {
        const rounds = xGame.rounds(x);
        assert.deepEqual(Array.from(rounds, round => round.length), [6, 8, 3]);
        assert.deepEqual(Array.from(rounds, round => round.filter(item => item.isCorrect).length), [2, 2, 1]);
        for (const [mode, round] of rounds.entries()) for (const { word, isCorrect } of round) {
            assert.ok((isCorrect ? correctX : wrongX).has(word.text));
            assert.equal(word.image, undefined);
            seenX[mode].add(word.text);
        }
    }
    for (const seen of seenX) {
        assert.deepEqual([...seen].sort(), [...correctX, ...wrongX].sort());
    }

    if (baseline) {
        for (const language of ["ru", "en-US"]) {
            const before = makeGame(baseline, language);
            const after = makeGame(source, language);
            const letters = after.pack.alphabet.filter(item => language === "ru" || item.letter === "X");
            for (const letter of letters) {
                const oldLetter = before.pack.alphabet.find(item => item.letter === letter.letter);
                for (let iteration = 0; iteration < 20; iteration++) {
                    assert.equal(JSON.stringify(after.rounds(letter)), JSON.stringify(before.rounds(oldLetter)),
                        `${language}/${letter.letter}: behavior changed`);
                }
            }
        }
        console.log(`${root || "root/"}Russian and X rounds exactly match pre-fix behavior with the same random seed`);
    }
    console.log(`${root || "root/"}All 25 ordinary letters, X pools and demo checks passed`);
}
assert.equal(await readFile(new URL("app.js", projectRoot), "utf8"),
    await readFile(new URL("www/app.js", projectRoot), "utf8"));
