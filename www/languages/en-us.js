(function () {
    "use strict";

    const wordsByLetter = {
        A: ["Apple", "Airplane", "Anchor", "Astronaut", "Ant"],
        B: ["Ball", "Bear", "Bird", "Boat", "Butterfly"],
        C: ["Cat", "Car", "Cake", "Cloud", "Crocodile"],
        D: ["Dog", "Duck", "Dolphin", "Dragon", "Doll"],
        E: ["Elephant", "Egg", "Eagle", "Engine", "Envelope"],
        F: ["Fish", "Fox", "Flower", "Frog", "Flag"],
        G: ["Giraffe", "Guitar", "Grapes", "Goat", "Gift"],
        H: ["Hamster", "Horse", "House", "Hat", "Helicopter"],
        I: ["Island", "Igloo", "Insect", "Ice cream", "Iron"],
        J: ["Jellyfish", "Juice", "Jacket", "Jeep", "Jar"],
        K: ["Kite", "Kitten", "Kangaroo", "Key", "King"],
        L: ["Lion", "Lemon", "Lizard", "Leaf", "Lamp"],
        M: ["Moon", "Milk", "Mushroom", "Monkey", "Mouse"],
        N: ["Needle", "Nest", "Nose", "Nurse", "Notebook"],
        O: ["Octopus", "Orange", "Owl", "Ocean", "Onion"],
        P: ["Panda", "Pencil", "Pie", "Puppy", "Pear"],
        Q: ["Queen", "Quilt", "Quail", "Quokka", "Question mark"],
        R: ["Robot", "Rocket", "Rainbow", "Road", "Raccoon"],
        S: ["Sun", "Star", "Snail", "Socks", "Ship"],
        T: ["Tiger", "Tree", "Turtle", "Tractor", "Telephone"],
        U: ["Umbrella", "Unicorn", "Ukulele", "Umpire", "Unicycle"],
        V: ["Violin", "Van", "Vase", "Volcano", "Vegetables"],
        W: ["Wolf", "Window", "Whale", "Watch", "Watermelon"],
        X: ["Fox", "Box", "Taxi", "Six", "Ox"],
        Y: ["Yogurt", "Yurt", "Yo-yo", "Yak", "Yacht"],
        Z: ["Zebra", "Zoo", "Zipper", "Zero", "Zucchini"]
    };

    const containedLetterWordPools = Object.freeze({
        X: ["Fox", "Box", "Taxi", "Six", "Ox"]
    });

    const exclusiveDistractorWordPools = Object.freeze({
        X: [
            "Baby", "Bunny", "Cookie", "Candy", "Teddy",
            "Rabbit", "Banana", "Train", "Shoe", "Chair"
        ]
    });

    function slugify(value) {
        return value
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
    }

    const alphabet = Object.entries(wordsByLetter).map(([letter, words]) => ({
        letter,
        words: words.map((text) => {
            const slug = slugify(text);

            return {
                text,
                audio: slug,
                image: `assets/images/en-us/${letter.toLowerCase()}/${text === "Horse" ? "horse-illustration" : slug}.webp`
            };
        })
    }));

    window.AzbukaLanguages = window.AzbukaLanguages || {};
    window.AzbukaLanguages["en-US"] = Object.freeze({
        id: "en-US",
        label: "English alphabet",
        nativeLabel: "English",
        alphabet,
        freeLetters: ["A", "B", "C"],
        textOnlyLetters: ["X"],
        containsLetterLetters: ["X"],
        containedLetterWordPools,
        exclusiveDistractorWordPools,
        containsLetterWords: containedLetterWordPools.X,
        interface: Object.freeze({
            appTitle: "ALPHABET",
            appSubtitle: "Learn the English alphabet",
            start: "Start",
            install: "Install app",
            chooseLetter: "Choose a letter",
            progress: "Completed",
            of: "of",
            demoNotice: "Demo: A, B and C are available",
            parents: "For parents",
            settingsDescription: "Manage your child's progress.",
            language: "Language and alphabet",
            soundOn: "Sound: on",
            soundOff: "Sound: off",
            resetProgress: "Reset all progress",
            resetQuestion: "Reset all progress? Every completed letter will become incomplete again.",
            cancel: "Cancel",
            reset: "Reset",
            close: "Close",
            fullVersion: "Full version",
            lockedLetter: "This letter is available in the full version of the app",
            buyFullVersion: "Buy full version",
            purchasePending: "Payment is awaiting confirmation in Google Play",
            purchaseCanceled: "Purchase canceled. Full access was not activated",
            playUnavailable: "Google Play is temporarily unavailable. Please try again",
            openingPlay: "Opening Google Play…",
            purchaseUnavailable: "Purchases are unavailable right now. Please try again later",
            back: "Back",
            letter: "Letter",
            nextWord: "Next word",
            balloons: "Balloons",
            findTwoWords: "Find two words",
            findWordsWithLetter: "Find words containing the letter",
            findShadow: "Find the shadow",
            connect: "Connect the pairs",
            driveBus: "Drive the bus",
            newCards: "New cards",
            newShadows: "New shadows",
            newRoad: "New road",
            repeat: "Play again",
            toLetters: "Letters",
            startMarker: "Start",
            gameChoiceLabel: "Choose a minigame",
            wordCardsLabel: "Word cards",
            sorterBoardLabel: "Drag the letter to its shadow",
            shadowLetter: "Shadow of the letter",
            busBoardLabel: "Drive the bus along the road to the word",
            busLabel: "Bus",
            loadingImageLabel: "Loading image",
            celebrations: ["Great job!", "Awesome!", "Excellent!", "Super!", "Well done!"]
        })
    });
}());
