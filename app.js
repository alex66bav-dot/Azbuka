const transliteration = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z",
    и: "i", й: "short-i", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
    с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch",
    ъ: "hard-sign", ы: "yery", ь: "soft-sign", э: "eh", ю: "yu", я: "ya"
};
const wordTransliteration = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z",
    и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
    с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch",
    ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya"
};

const customWordImages = {
    В: {
        Велосипед: "bicycle.png",
        Вишня: "cherry.png",
        Волк: "wolf.png",
        Ворона: "crow.png",
        Ведро: "bucket.png"
    },
    Г: {
        Груша: "pear.png",
        Гриб: "mushroom.png",
        Гусеница: "caterpillar.png",
        Гитара: "guitar.png",
        Голубь: "pigeon.png"
    },
    Д: {
        Дом: "house.png",
        Дерево: "tree.png",
        Дельфин: "dolphin.png",
        Дорога: "road.png",
        Дракон: "dragon.png"
    },
    Е: {
        Енот: "raccoon.png",
        Ежевика: "blackberry.png",
        Ель: "fir_tree.png",
        Ехидна: "echidna.png",
        Еда: "food.png"
    },
    Ё: {
        Ёж: "hedgehog.png",
        Ёлка: "christmas_tree.png",
        Ёрш: "ruff.png",
        Ёжик: "little_hedgehog.png",
        "Ёлочная игрушка": "christmas_ornament.png"
    },
    Ж: {
        Жираф: "giraffe.png",
        Жук: "beetle.png",
        Жаба: "toad.png",
        Журавль: "crane.png",
        Жёлудь: "acorn.png"
    },
    З: {
        Заяц: "hare.png",
        Зебра: "zebra.png",
        Зонт: "umbrella.png",
        Звезда: "star.png",
        Земляника: "wild_strawberry.png"
    },
    И: {
        Игрушка: "toy.png",
        Индюк: "turkey.png",
        Игла: "needle.png",
        Ирис: "iris.png",
        Индейка: "female_turkey.png"
    },
    Й: {
        Йогурт: "yogurt.png",
        Йод: "iodine.png",
        Йети: "yeti.png",
        Йорк: "yorkie.png",
        Йога: "yoga.png"
    },
    К: {
        Корабль: "ship.png",
        Кот: "cat.png",
        Карандаш: "pencil.png",
        Кукла: "doll.png",
        Крокодил: "crocodile.png"
    },
    Л: {
        Лиса: "fox.png",
        Лев: "lion.png",
        Луна: "moon.png",
        Лимон: "lemon.png",
        Лодка: "boat.png"
    },
    М: {
        Мяч: "ball.png",
        Медведь: "bear.png",
        Машина: "car.png",
        Молоко: "milk.png",
        Море: "sea.png"
    },
    Н: {
        Носорог: "rhinoceros.png",
        Носки: "socks.png",
        Небо: "sky.png",
        Нитки: "thread.png",
        Нора: "burrow.png"
    },
    О: {
        Облако: "cloud.png",
        Окно: "window.png",
        Остров: "island.png",
        Одуванчик: "dandelion.png",
        Осьминог: "octopus.png"
    },
    П: {
        Птица: "bird.png",
        Панда: "panda.png",
        Пирог: "pie.png",
        Пальма: "palm_tree.png",
        Паровоз: "steam_locomotive.png"
    },
    Р: {
        Радуга: "rainbow.png",
        Рыба: "fish.png",
        Ракета: "rocket.png",
        Робот: "robot.png",
        Ромашка: "daisy.png"
    },
    С: {
        Солнце: "sun.png",
        Собака: "dog.png",
        Слон: "elephant.png",
        Сыр: "cheese.png",
        Самолёт: "airplane.png"
    },
    Т: {
        Тигр: "tiger.png",
        Торт: "cake.png",
        Туча: "cloud_dark.png",
        Трактор: "tractor.png",
        Телефон: "telephone.png"
    },
    У: {
        Утка: "duck.png",
        Улитка: "snail.png",
        Улыбка: "smile.png",
        Улица: "street.png",
        Утюг: "iron.png"
    },
    Ф: {
        Фонарик: "flashlight.png",
        Фламинго: "flamingo.png",
        Фея: "fairy.png",
        Флаг: "flag.png",
        Фрукты: "fruits.png"
    },
    Х: {
        Хлеб: "bread.png",
        Хомяк: "hamster.png",
        Хвост: "tail.png",
        Холодильник: "refrigerator.png",
        Художник: "artist.png"
    },
    Ц: {
        Цыплёнок: "chick.png",
        Цветок: "flower.png",
        Цирк: "circus.png",
        Цапля: "heron.png",
        Цифра: "number.png"
    },
    Ч: {
        Черепаха: "turtle.png",
        Часы: "clock.png",
        Чайник: "teapot.png",
        Чемодан: "suitcase.png",
        Чашка: "cup.png"
    },
    Ш: {
        Шар: "balloon.png",
        Шуба: "fur_coat.png",
        Шоколад: "chocolate.png",
        Шишка: "pinecone.png",
        Шмель: "bumblebee.png"
    },
    Щ: {
        Щука: "pike.png",
        Щенок: "puppy.png",
        Щётка: "brush.png",
        Щавель: "sorrel.png",
        Щит: "shield.png"
    },
    Ъ: {
        Подъезд: "entrance.png",
        Объём: "volume.png",
        Съёмка: "filming.png",
        Объявление: "notice.png",
        Съезд: "congress.png"
    },
    Ы: {
        Сырок: "syrok.png",
        Лыжи: "lyzhi.png",
        Дым: "smoke.png",
        Тыква: "tykva.png",
        Мыло: "mylo.png"
    },
    Ь: {
        Семья: "family.png",
        Конь: "horse.png",
        Пальто: "coat.png",
        Мальчик: "boy.png",
        Степь: "step.png"
    },
    Э: {
        Эскимо: "popsicle.png",
        Экран: "screen.png",
        Экскаватор: "excavator.png",
        Эхо: "echo.png",
        Этажерка: "shelf.png"
    },
    Ю: {
        Юла: "spinning_top.png",
        Юбка: "skirt.png",
        Юрта: "yurt.png",
        Юнга: "cabin_boy.png",
        Юмор: "humor.png"
    },
    Я: {
        Яблоко: "apple.png",
        Ягода: "berry.png",
        Якорь: "anchor.png",
        Ящерица: "lizard.png",
        Яйцо: "egg.png"
    }
};
const sharedWordImagePaths = {
    Ы: {
        Мыло: "assets/images/letters/yery/mylo.png"
    }
};

function getLetterFolderName(letter) {
    const normalizedLetter = letter.toLowerCase();

    return transliteration[normalizedLetter] ?? normalizedLetter;
}

function createWord(letter, text) {
    const customImages = customWordImages[letter];
    const sharedImagePath = sharedWordImagePaths[letter]?.[text];
    const imageName = customImages?.[text]
        ?? `${text
            .toLowerCase()
            .split("")
            .map((character) => wordTransliteration[character] ?? character)
            .join("")
            .replace(/\s+/g, "-")}.png`;

    const audioName = text
        .toLowerCase()
        .split("")
        .map((character) => wordTransliteration[character] ?? character)
        .join("")
        .replace(/\s+/g, "-");

    return {
        text,
        image: sharedImagePath ?? `assets/images/letters/${getLetterFolderName(letter)}/${imageName}`,
        audio: audioName
    };
}

function createWords(letter, words) {
    return words.map((word) => createWord(letter, word));
}

const alphabet = [
    { letter: "А", words: createWords("А", ["Арбуз", "Аист", "Апельсин", "Автобус", "Акула"]) },
    { letter: "Б", words: createWords("Б", ["Бабочка", "Банан", "Белка", "Барабан", "Бегемот"]) },
    { letter: "В", words: createWords("В", ["Велосипед", "Вишня", "Волк", "Ворона", "Ведро"]) },
    { letter: "Г", words: createWords("Г", ["Груша", "Гриб", "Гусеница", "Гитара", "Голубь"]) },
    { letter: "Д", words: createWords("Д", ["Дом", "Дерево", "Дельфин", "Дорога", "Дракон"]) },
    { letter: "Е", words: createWords("Е", ["Енот", "Ежевика", "Ель", "Ехидна", "Еда"]) },
    { letter: "Ё", words: createWords("Ё", ["Ёж", "Ёлка", "Ёрш", "Ёжик", "Ёлочная игрушка"]) },
    { letter: "Ж", words: createWords("Ж", ["Жираф", "Жук", "Жаба", "Журавль", "Жёлудь"]) },
    { letter: "З", words: createWords("З", ["Заяц", "Зебра", "Зонт", "Звезда", "Земляника"]) },
    { letter: "И", words: createWords("И", ["Игрушка", "Индюк", "Игла", "Ирис", "Индейка"]) },
    { letter: "Й", words: createWords("Й", ["Йогурт", "Йод", "Йети", "Йорк", "Йога"]) },
    { letter: "К", words: createWords("К", ["Корабль", "Кот", "Карандаш", "Кукла", "Крокодил"]) },
    { letter: "Л", words: createWords("Л", ["Лиса", "Лев", "Луна", "Лимон", "Лодка"]) },
    { letter: "М", words: createWords("М", ["Мяч", "Медведь", "Машина", "Молоко", "Море"]) },
    { letter: "Н", words: createWords("Н", ["Носорог", "Носки", "Небо", "Нитки", "Нора"]) },
    { letter: "О", words: createWords("О", ["Облако", "Окно", "Остров", "Одуванчик", "Осьминог"]) },
    { letter: "П", words: createWords("П", ["Птица", "Панда", "Пирог", "Пальма", "Паровоз"]) },
    { letter: "Р", words: createWords("Р", ["Радуга", "Рыба", "Ракета", "Робот", "Ромашка"]) },
    { letter: "С", words: createWords("С", ["Солнце", "Собака", "Слон", "Сыр", "Самолёт"]) },
    { letter: "Т", words: createWords("Т", ["Тигр", "Торт", "Туча", "Трактор", "Телефон"]) },
    { letter: "У", words: createWords("У", ["Утка", "Улитка", "Улыбка", "Улица", "Утюг"]) },
    { letter: "Ф", words: createWords("Ф", ["Фонарик", "Фламинго", "Фея", "Флаг", "Фрукты"]) },
    { letter: "Х", words: createWords("Х", ["Хлеб", "Хомяк", "Хвост", "Холодильник", "Художник"]) },
    { letter: "Ц", words: createWords("Ц", ["Цыплёнок", "Цветок", "Цирк", "Цапля", "Цифра"]) },
    { letter: "Ч", words: createWords("Ч", ["Черепаха", "Часы", "Чайник", "Чемодан", "Чашка"]) },
    { letter: "Ш", words: createWords("Ш", ["Шар", "Шуба", "Шоколад", "Шишка", "Шмель"]) },
    { letter: "Щ", words: createWords("Щ", ["Щука", "Щенок", "Щётка", "Щавель", "Щит"]) },
    { letter: "Ъ", words: createWords("Ъ", ["Подъезд", "Объём", "Съёмка", "Объявление", "Съезд"]) },
    { letter: "Ы", words: createWords("Ы", ["Сырок", "Лыжи", "Дым", "Тыква", "Мыло"]) },
    { letter: "Ь", words: createWords("Ь", ["Семья", "Конь", "Пальто", "Мальчик", "Степь"]) },
    { letter: "Э", words: createWords("Э", ["Эскимо", "Экран", "Экскаватор", "Эхо", "Этажерка"]) },
    { letter: "Ю", words: createWords("Ю", ["Юла", "Юбка", "Юрта", "Юнга", "Юмор"]) },
    { letter: "Я", words: createWords("Я", ["Яблоко", "Ягода", "Якорь", "Ящерица", "Яйцо"]) }
];

let selectedLetter = null;
let displayedLetterWord = null;
const wordIndexes = Object.fromEntries(alphabet.map((letterData) => [letterData.letter, 0]));

const lettersGrid = document.getElementById("lettersGrid");
const bigLetter = document.getElementById("bigLetter");
const letterTitle = document.getElementById("letterTitle");
const letterImage = document.getElementById("letterImage");
const wordsBlock = document.getElementById("wordsBlock");
const targetLetter = document.getElementById("targetLetter");
const balloons = document.getElementById("balloons");
const gameScreenTitle = document.getElementById("gameScreenTitle");
const gameScreenTitleText = document.getElementById("gameScreenTitleText");
const gameScreenTitleLetter = document.getElementById("gameScreenTitleLetter");
const findObjectCards = document.getElementById("findObjectCards");
const backToLettersButton = document.getElementById("backToLettersButton");
const progressText = document.getElementById("progressText");
const progressBarFill = document.getElementById("progressBarFill");
const settingsButton = document.getElementById("settingsButton");
const settingsOverlay = document.getElementById("settingsOverlay");
const showResetConfirmButton = document.getElementById("showResetConfirmButton");
const resetConfirmBlock = document.getElementById("resetConfirmBlock");
const cancelResetButton = document.getElementById("cancelResetButton");
const confirmResetButton = document.getElementById("confirmResetButton");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const soundToggleButton = document.getElementById("soundToggleButton");
const repeatRoundButton = document.getElementById("repeatRoundButton");
const playBalloonsGameButton = document.getElementById("playBalloonsGameButton");
const playSorterGameButton = document.getElementById("playSorterGameButton");
const playConnectGameButton = document.getElementById("playConnectGameButton");
const playBusGameButton = document.getElementById("playBusGameButton");
const connectLineBoard = document.getElementById("connectLineBoard");
const connectLeftImages = document.getElementById("connectLeftImages");
const connectRightImages = document.getElementById("connectRightImages");
const connectCenterLetter = document.getElementById("connectCenterLetter");
const connectLines = document.getElementById("connectLines");
const sorterBoard = document.getElementById("sorterBoard");
const sorterShadows = document.getElementById("sorterShadows");
const sorterTopShadows = document.getElementById("sorterTopShadows");
const sorterBottomShadows = document.getElementById("sorterBottomShadows");
const sorterLetter = document.getElementById("sorterLetter");
const busBoard = document.getElementById("busBoard");
const busRoadSvg = document.getElementById("busRoadSvg");
const busStartMarker = document.getElementById("busStartMarker");
const busDestinations = document.getElementById("busDestinations");
const busVehicle = document.getElementById("busVehicle");
const gameChoiceButtons = document.querySelectorAll(".gameChoiceButton");
const screens = document.querySelectorAll(".screen");
const balloonColors = ["#ff6b6b", "#4dabf7", "#51cf66", "#ff922b", "#9775fa"];
const celebrationPhrases = ["Молодец!", "Здорово!", "Отлично!", "Супер!", "Умница!"];
const desktopBalloonSize = 90;
const totalLettersCount = alphabet.length;
let correctBalloonsLeft = 0;
let lastCelebrationPhrase = "";
let nextRoundTimeout = null;
let animationFrameId = null;
let lastAnimationTime = null;
let movingBalloons = [];
let findObjectRoundItems = [];
let findObjectCorrectFound = 0;
let findObjectRoundCompleted = false;
let activeGameMode = "findObjects";
let connectRoundItems = [];
let connectMatches = [];
let activeConnection = null;
let connectRoundCompleted = false;
let sorterRoundCompleted = false;
let sorterCorrectFound = 0;
let sorterDrag = null;
let busRoundCompleted = false;
let busDrive = null;
let busProgress = 0;
let busRouteStates = [];
let busSelectedRouteIndex = null;
let busRouteSetIndex = -1;
const lastSpecialFindSets = new Map();
const lastSpecialConnectSets = new Map();
const lastBusWords = new Map();
const lastBusSets = new Map();
let currentImagePath = null;
let imageRequestId = 0;
let imageRetryTimeout = null;
const imageTransitionDuration = 260;
const imageRetryDelay = 5000;
const imageCache = new Map();
const imageRequests = new Map();
let letterSelectionTimeout = null;
const letterSelectionDelay = 150;
const completedLettersStorageKey = "azbukaCompletedLetters";
const miniGameProgressStorageKey = "azbukaMiniGameProgress";
const miniGameProgressVersionKey = "azbukaMiniGameProgressVersion";
const currentMiniGameProgressVersion = 2;
const miniGameIds = ["game1", "game2", "game3", "game4", "game5"];
const completedLetters = new Set(loadCompletedLetters());
const miniGameProgress = loadMiniGameProgress();
const letterCards = new Map();
const letterProgressRings = new Map();

function loadCompletedLetters() {
    try {
        const storedLetters = JSON.parse(localStorage.getItem(completedLettersStorageKey) ?? "[]");

        return Array.isArray(storedLetters)
            ? storedLetters.filter((letter) => alphabet.some((letterData) => letterData.letter === letter))
            : [];
    } catch {
        return [];
    }
}

function normalizeCompletedGames(completedGames) {
    if (!Array.isArray(completedGames)) {
        return [];
    }

    return [...new Set(completedGames.filter((gameId) => miniGameIds.includes(gameId)))];
}

function migrateLegacyMiniGameValue(letter, value) {
    if (typeof value === "number") {
        if (value >= 5) {
            return [...miniGameIds];
        }

        if (value >= 2) {
            return ["game2"];
        }

        if (value >= 1) {
            return ["game1"];
        }

        return [];
    }

    if (value && typeof value === "object") {
        return normalizeCompletedGames(value.completedGames ?? []);
    }

    return [];
}

function loadMiniGameProgress() {
    const fallbackProgress = {};
    let storedVersion = 1;

    alphabet.forEach((letterData) => {
        fallbackProgress[letterData.letter] = { completedGames: [] };
    });

    try {
        const storedProgress = JSON.parse(localStorage.getItem(miniGameProgressStorageKey) ?? "{}");
        storedVersion = Number(localStorage.getItem(miniGameProgressVersionKey)) || 1;

        if (!storedProgress || typeof storedProgress !== "object" || Array.isArray(storedProgress)) {
            return fallbackProgress;
        }

        alphabet.forEach((letterData) => {
            const rawValue = storedProgress[letterData.letter];
            const completedGames = migrateLegacyMiniGameValue(letterData.letter, rawValue);

            if (storedVersion < currentMiniGameProgressVersion
                && completedGames.includes("game3")
                && !completedGames.includes("game4")
                && completedGames.length < miniGameIds.length) {
                completedGames.splice(completedGames.indexOf("game3"), 1, "game4");
            }

            fallbackProgress[letterData.letter] = {
                completedGames
            };
        });
    } catch {
        return fallbackProgress;
    }

    const legacyCompletedLetters = loadCompletedLetters();

    legacyCompletedLetters.forEach((letter) => {
        if (!fallbackProgress[letter]) {
            return;
        }

        fallbackProgress[letter] = {
            completedGames: [...miniGameIds]
        };
    });

    try {
        localStorage.setItem(miniGameProgressVersionKey, String(currentMiniGameProgressVersion));
    } catch {
        // Progress migration stays available in memory.
    }

    return fallbackProgress;
}

function updateProgressUI() {
    const completedCount = alphabet.filter((letterData) => getCompletedGames(letterData.letter).length === miniGameIds.length).length;
    const progressPercent = Math.round((completedCount / totalLettersCount) * 100);

    if (progressText) {
        progressText.textContent = `${completedCount} из ${totalLettersCount}`;
    }

    if (progressBarFill) {
        progressBarFill.style.width = `${progressPercent}%`;
    }
}

function saveMiniGameProgress() {
    try {
        localStorage.setItem(miniGameProgressStorageKey, JSON.stringify(miniGameProgress));
        localStorage.setItem(miniGameProgressVersionKey, String(currentMiniGameProgressVersion));
    } catch {
        // Progress remains available until the page is reloaded.
    }
}

function getCompletedGames(letter) {
    return normalizeCompletedGames(miniGameProgress[letter]?.completedGames ?? []);
}

function isLetterFullyCompleted(letter) {
    return getCompletedGames(letter).length === miniGameIds.length;
}

function setCompletedGames(letter, completedGames) {
    miniGameProgress[letter] = {
        completedGames: normalizeCompletedGames(completedGames)
    };

    saveMiniGameProgress();
}

function recordMiniGameProgress(letter, gameId) {
    const nextCompletedGames = new Set(getCompletedGames(letter));

    if (nextCompletedGames.has(gameId)) {
        return;
    }

    nextCompletedGames.add(gameId);
    setCompletedGames(letter, [...nextCompletedGames]);
    updateLetterCardProgress(letter);
}

function createProgressRingBackground(letter) {
    const completedGames = new Set(getCompletedGames(letter));

    if (!letterProgressRings.has(letter)) {
        return;
    }

    const progressRing = letterProgressRings.get(letter);
    const segments = progressRing.querySelectorAll(".letterProgressSegment");

    segments.forEach((segment) => {
        const gameId = segment.dataset.gameId;
        const isComplete = completedGames.has(gameId);
        segment.classList.toggle("is-complete", isComplete);
    });
}

function updateLetterCardProgress(letter) {
    const card = letterCards.get(letter);
    const progressRing = letterProgressRings.get(letter);

    if (progressRing) {
        createProgressRingBackground(letter);
    }

    card?.classList.toggle("is-completed", isLetterFullyCompleted(letter));
    updateProgressUI();
}

function markLetterCompleted(letter) {
    if (isLetterFullyCompleted(letter)) {
        return;
    }

    setCompletedGames(letter, miniGameIds);
    updateLetterCardProgress(letter);
}

function recordMiniGameCompletion(letter) {
    recordMiniGameProgress(letter, "game1");
}

function recordFindObjectsCompletion(letter) {
    recordMiniGameProgress(letter, "game2");
}

function resetCompletedLettersProgress() {
    try {
        localStorage.removeItem(completedLettersStorageKey);
        localStorage.removeItem(miniGameProgressStorageKey);
        localStorage.setItem(miniGameProgressVersionKey, String(currentMiniGameProgressVersion));
    } catch {
        // Ignore storage access issues and keep the UI reset in sync.
    }

    completedLetters.clear();
    alphabet.forEach((letterData) => {
        miniGameProgress[letterData.letter] = { completedGames: [] };
        updateLetterCardProgress(letterData.letter);
    });
}

function openSettingsModal() {
    updateSoundToggle();
    if (settingsOverlay) {
        settingsOverlay.classList.remove("hidden");
    }

    if (resetConfirmBlock) {
        resetConfirmBlock.classList.add("hidden");
    }
}

function updateSoundToggle() {
    if (!soundToggleButton || !window.AzbukaAudio) {
        return;
    }

    const isEnabled = window.AzbukaAudio.isEnabled();
    soundToggleButton.textContent = `Звук: ${isEnabled ? "включён" : "выключен"}`;
    soundToggleButton.setAttribute("aria-pressed", String(isEnabled));
}

function closeSettingsModal() {
    if (settingsOverlay) {
        settingsOverlay.classList.add("hidden");
    }

    if (resetConfirmBlock) {
        resetConfirmBlock.classList.add("hidden");
    }
}

function showResetProgressConfirmation() {
    if (resetConfirmBlock) {
        resetConfirmBlock.classList.remove("hidden");
    }
}

function showScreen(screenId) {
    if (screenId !== "letterScreen") {
        window.AzbukaAudio?.stopVoice();
    }

    screens.forEach((screen) => {
        screen.classList.toggle("active", screen.id === screenId);
    });
}

function setGameScreenTitle(before, target, after = "") {
    if (!gameScreenTitle) {
        return;
    }

    const beforePart = document.createElement("span");
    const targetPart = document.createElement("span");
    const afterPart = document.createElement("span");

    beforePart.textContent = before;
    targetPart.textContent = target;
    targetPart.className = "target-letter";
    afterPart.textContent = after;
    gameScreenTitle.replaceChildren(beforePart, targetPart, afterPart);
}

function clearImageRetry() {
    clearTimeout(imageRetryTimeout);
    imageRetryTimeout = null;
}

function replaceWordVisual(nextVisual) {
    nextVisual.classList.remove("is-entering", "is-visible", "is-leaving");
    nextVisual.classList.add("imageVisual", "is-entering");
    letterImage.replaceChildren(nextVisual);

    requestAnimationFrame(() => {
        nextVisual.classList.add("is-visible");
    });
}

function createLoadingIndicator() {
    const indicator = document.createElement("div");

    indicator.className = "imageLoadingIndicator";
    indicator.setAttribute("role", "status");
    indicator.setAttribute("aria-label", "Загрузка изображения");
    return indicator;
}

function hideLoadingIndicator(indicator) {
    if (!indicator) {
        return;
    }

    indicator.classList.add("is-hidden");
    setTimeout(() => indicator.remove(), imageTransitionDuration);
}

function requestImage(imagePath, bypassCache = false) {
    const cachedImage = imageCache.get(imagePath);

    if (cachedImage) {
        return Promise.resolve(cachedImage);
    }

    if (!bypassCache && imageRequests.has(imagePath)) {
        return imageRequests.get(imagePath);
    }

    const imageRequest = new Promise((resolve, reject) => {
        const image = new Image();

        image.addEventListener("load", () => {
            const decodeImage = typeof image.decode === "function"
                ? image.decode().catch(() => {})
                : Promise.resolve();

            decodeImage.then(() => {
                imageCache.set(imagePath, image);
                imageRequests.delete(imagePath);
                resolve(image);
            });
        }, { once: true });
        image.addEventListener("error", () => {
            imageRequests.delete(imagePath);
            reject();
        }, { once: true });
        image.src = bypassCache ? `${imagePath}?updated=${Date.now()}` : imagePath;
    });

    imageRequests.set(imagePath, imageRequest);
    return imageRequest;
}

function preloadWordImages(words) {
    words.forEach((word) => {
        if (word?.image) {
            requestImage(word.image).catch(() => {});
        }
    });
}

function scheduleImageRetry(word, requestId) {
    clearImageRetry();
    imageRetryTimeout = setTimeout(() => {
        if (requestId === imageRequestId && currentImagePath === word.image) {
            loadWordImage(word, requestId, null, true);
        }
    }, imageRetryDelay);
}

function loadWordImage(word, requestId, loadingIndicator, bypassCache = false) {
    requestImage(word.image, bypassCache)
        .then((image) => {
        if (requestId !== imageRequestId || currentImagePath !== word.image) {
            return;
        }

        image.alt = word.text;
        hideLoadingIndicator(loadingIndicator);
        replaceWordVisual(image);
        clearImageRetry();
    })
    .catch(() => {
        if (requestId === imageRequestId && currentImagePath === word.image) {
            hideLoadingIndicator(loadingIndicator);
            scheduleImageRetry(word, requestId);
        }
    });
}

function showWordImage(word) {
    const requestId = ++imageRequestId;
    const cachedImage = imageCache.get(word.image);

    currentImagePath = word.image;
    clearImageRetry();

    if (cachedImage) {
        cachedImage.alt = word.text;
        replaceWordVisual(cachedImage);
        return;
    }

    const placeholder = document.createElement("div");
    const loadingIndicator = createLoadingIndicator();

    placeholder.className = "imagePlaceholder";
    placeholder.textContent = selectedLetter.letter;
    placeholder.appendChild(loadingIndicator);
    replaceWordVisual(placeholder);
    loadWordImage(word, requestId, loadingIndicator);
}

function showLetter(letterData) {
    selectedLetter = letterData;
    const wordIndex = wordIndexes[selectedLetter.letter];
    const word = selectedLetter.words[wordIndex];
    displayedLetterWord = word;

    wordIndexes[selectedLetter.letter] = (wordIndex + 1) % selectedLetter.words.length;
    bigLetter.textContent = selectedLetter.letter;
    letterTitle.textContent = `Буква ${selectedLetter.letter}`;
    wordsBlock.innerHTML = `<div class="wordCard">${word.text}</div>`;
    setActiveGameChoice(activeGameMode);
    showWordImage(word);
    showScreen("letterScreen");
    window.AzbukaAudio?.playLetter(getLetterFolderName(letterData.letter));
}

function isSpecialLetter(letter) {
    return letter === "Ъ" || letter === "Ь" || letter === "Ы";
}

function createSpecialWordItem(word, specialCharacter) {
    return {
        ...word,
        specialCharacter
    };
}

function getOtherSpecialWords(letter) {
    return alphabet
        .filter((candidate) => isSpecialLetter(candidate.letter) && candidate.letter !== letter)
        .flatMap((candidate) => candidate.words.map((word) => createSpecialWordItem(word, candidate.letter)));
}

function appendHighlightedSpecialWord(container, text, specialCharacter) {
    [...text].forEach((character) => {
        if (character.toUpperCase() === specialCharacter) {
            const highlight = document.createElement("span");

            highlight.className = "specialWordHighlight";
            highlight.textContent = character;
            container.appendChild(highlight);
        } else {
            container.appendChild(document.createTextNode(character));
        }
    });
}

function buildSpecialWordSet(letterData, correctCount, wrongCount, previousSets) {
    let nextItems = [];
    let signature = "";
    const previousSignature = previousSets.get(letterData.letter);

    for (let attempt = 0; attempt < 8; attempt += 1) {
        const correctWords = shuffleArray(letterData.words)
            .slice(0, correctCount)
            .map((word) => createSpecialWordItem(word, letterData.letter));
        const otherWords = shuffleArray(getOtherSpecialWords(letterData.letter)).slice(0, wrongCount);

        nextItems = shuffleArray([...correctWords, ...otherWords]);
        signature = nextItems.map((item) => item.text).sort().join("|");

        if (signature !== previousSignature) {
            break;
        }
    }

    previousSets.set(letterData.letter, signature);
    return nextItems;
}

function buildFindObjectRound(letterData) {
    if (isSpecialLetter(letterData.letter)) {
        return buildSpecialWordSet(letterData, 2, 4, lastSpecialFindSets);
    }

    const correctWords = shuffleArray(letterData.words).slice(0, 2);
    const otherWords = shuffleArray(alphabet
        .filter((candidate) => candidate.letter !== letterData.letter)
        .flatMap((candidate) => candidate.words)
        .map((word) => ({ ...word }))
    ).slice(0, 4);

    return shuffleArray([...correctWords, ...otherWords]);
}

function isCorrectFindObjectWord(word, letterData) {
    const selectedLetter = letterData.letter.toLowerCase();
    const wordText = word.text.toLowerCase();

    if (isSpecialLetter(letterData.letter)) {
        return word.specialCharacter === letterData.letter;
    }

    return wordText.startsWith(selectedLetter);
}

function setActiveGameChoice(gameMode) {
    gameChoiceButtons.forEach((button) => {
        const isActive = (gameMode === "balloons" && button === playBalloonsGameButton)
            || (gameMode === "findObjects" && button.id === "playGameButton")
            || (gameMode === "sorter" && button === playSorterGameButton)
            || (gameMode === "connectLines" && button === playConnectGameButton)
            || (gameMode === "bus" && button === playBusGameButton);

        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function hideGameBoards() {
    findObjectCards?.classList.add("hidden");
    connectLineBoard?.classList.add("hidden");
    sorterBoard?.classList.add("hidden");
    busBoard?.classList.add("hidden");
    balloons?.classList.add("hidden");
}

function resetCelebrationOverlay() {
    const celebrationOverlay = document.getElementById("findObjectCelebration");

    if (!celebrationOverlay) {
        return;
    }

    celebrationOverlay.classList.add("hidden");
    celebrationOverlay.textContent = "";
}

function showFindObjectRound(letterData) {
    activeGameMode = "findObjects";
    setActiveGameChoice("findObjects");
    selectedLetter = letterData;
    findObjectRoundItems = buildFindObjectRound(letterData);
    preloadWordImages(findObjectRoundItems);
    findObjectCorrectFound = 0;
    findObjectRoundCompleted = false;
    document.querySelector(".gameTitle").textContent = "";
    repeatRoundButton.textContent = "Новые карточки";
    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();

    if (letterData.letter === "Ъ") {
        setGameScreenTitle("Найди два слова, в которых есть ", "твёрдый знак");
    } else if (letterData.letter === "Ь") {
        setGameScreenTitle("Найди два слова, в которых есть ", "мягкий знак");
    } else if (letterData.letter === "Ы") {
        setGameScreenTitle("Найди два слова, в которых есть буква ", "Ы");
    } else {
        setGameScreenTitle("Найди два слова на букву ", letterData.letter);
    }

    if (findObjectCards) {
        findObjectCards.classList.remove("hidden");
        findObjectCards.innerHTML = "";
    }

    connectLineBoard?.classList.add("hidden");
    sorterBoard?.classList.add("hidden");
    busBoard?.classList.add("hidden");

    if (repeatRoundButton) {
        repeatRoundButton.classList.remove("hidden");
    }

    if (backToLettersButton) {
        backToLettersButton.classList.add("hidden");
    }

    if (balloons) {
        balloons.classList.add("hidden");
        balloons.innerHTML = "";
    }

    resetCelebrationOverlay();

    findObjectRoundItems.forEach((item) => {
        const card = document.createElement("button");
        const label = document.createElement("div");

        card.type = "button";
        card.className = "findObjectCard";
        card.setAttribute("aria-label", item.text);
        label.className = "cardLabel";

        if (isSpecialLetter(letterData.letter)) {
            card.classList.add("specialWordCard");
            appendHighlightedSpecialWord(label, item.text, item.specialCharacter);
        } else {
            const image = document.createElement("img");

            image.src = item.image;
            image.alt = item.text;
            label.textContent = item.text;
            card.appendChild(image);
        }

        card.appendChild(label);
        card.addEventListener("click", () => handleFindObjectCardClick(card, item));
        findObjectCards?.appendChild(card);
    });

    showScreen("gameScreen");
}

function buildSorterRound(letterData) {
    const wrongLetters = shuffleArray(alphabet
        .filter((candidate) => candidate.letter !== letterData.letter)
        .map((candidate) => candidate.letter)
    ).slice(0, 6);

    return shuffleArray([letterData.letter, letterData.letter, ...wrongLetters]);
}

function resetSorterLetterPosition() {
    sorterDrag = null;
    sorterLetter?.classList.remove("is-dragging");

    if (sorterLetter) {
        sorterLetter.style.transform = "";
    }
}

function findSorterTargetAtPoint(clientX, clientY) {
    return [...sorterShadows.querySelectorAll(".sorterShadow")].find((shadow) => {
        const rect = shadow.getBoundingClientRect();

        return clientX >= rect.left && clientX <= rect.right
            && clientY >= rect.top && clientY <= rect.bottom;
    }) ?? null;
}

function completeSorterGame(targetShadow) {
    if (sorterRoundCompleted || !selectedLetter) {
        return;
    }

    sorterRoundCompleted = true;
    resetSorterLetterPosition();
    sorterLetter?.classList.add("is-complete");
    targetShadow.classList.add("is-matched");
    recordMiniGameProgress(selectedLetter.letter, "game3");
    repeatRoundButton.textContent = "Повторить";
    repeatRoundButton.classList.remove("hidden");
    backToLettersButton?.classList.remove("hidden");
    window.AzbukaAudio?.playEffect("win");
    showCelebrationPhrase(getCelebrationPhrase());
}

function handleSorterTargetChoice(targetShadow) {
    if (sorterRoundCompleted || targetShadow.classList.contains("is-matched")) {
        return;
    }

    if (targetShadow.dataset.correct === "true") {
        targetShadow.classList.add("is-matched");
        targetShadow.disabled = true;
        sorterCorrectFound += 1;

        if (sorterCorrectFound >= 2) {
            completeSorterGame(targetShadow);
        } else {
            window.AzbukaAudio?.playEffect("correct");
            resetSorterLetterPosition();
        }

        return;
    }

    targetShadow.classList.add("is-wrong");
    window.AzbukaAudio?.playEffect("wrong");
    setTimeout(() => targetShadow.classList.remove("is-wrong"), 620);
}

function beginSorterDrag(event) {
    if (sorterRoundCompleted) {
        return;
    }

    event.preventDefault();
    sorterDrag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        hasMoved: false
    };
    sorterLetter.setPointerCapture?.(event.pointerId);
    sorterLetter.classList.add("is-dragging");
}

function moveSorterDrag(event) {
    if (!sorterDrag || event.pointerId !== sorterDrag.pointerId) {
        return;
    }

    const offsetX = event.clientX - sorterDrag.startX;
    const offsetY = event.clientY - sorterDrag.startY;

    if (Math.hypot(offsetX, offsetY) >= 8) {
        sorterDrag.hasMoved = true;
    }

    sorterLetter.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.08)`;
}

function finishSorterDrag(event) {
    if (!sorterDrag || event.pointerId !== sorterDrag.pointerId) {
        return;
    }

    const targetShadow = findSorterTargetAtPoint(event.clientX, event.clientY);

    sorterLetter.releasePointerCapture?.(event.pointerId);

    if (sorterDrag.hasMoved && targetShadow?.dataset.correct === "true") {
        handleSorterTargetChoice(targetShadow);
        return;
    }

    if (sorterDrag.hasMoved && targetShadow) {
        targetShadow.classList.add("is-wrong");
        window.AzbukaAudio?.playEffect("wrong");
        setTimeout(() => targetShadow.classList.remove("is-wrong"), 620);
    }

    resetSorterLetterPosition();
}

function showSorterRound(letterData) {
    activeGameMode = "sorter";
    setActiveGameChoice("sorter");
    selectedLetter = letterData;
    sorterRoundCompleted = false;
    sorterCorrectFound = 0;
    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();
    cancelActiveConnection();
    hideGameBoards();
    sorterBoard?.classList.remove("hidden");
    sorterTopShadows?.replaceChildren();
    sorterBottomShadows?.replaceChildren();
    sorterLetter.textContent = letterData.letter;
    sorterLetter.setAttribute("aria-label", `Буква ${letterData.letter}`);
    sorterLetter.classList.remove("is-complete");
    resetSorterLetterPosition();
    setGameScreenTitle("Перетащи букву ", letterData.letter, " к её тени");
    document.querySelector(".gameTitle").textContent = "";
    repeatRoundButton.textContent = "Новые тени";
    repeatRoundButton.classList.remove("hidden");
    backToLettersButton?.classList.add("hidden");
    resetCelebrationOverlay();

    buildSorterRound(letterData).forEach((letter, index) => {
        const shadow = document.createElement("button");

        shadow.type = "button";
        shadow.className = "sorterShadow";
        shadow.textContent = letter;
        shadow.dataset.correct = String(letter === letterData.letter);
        shadow.setAttribute("aria-label", `Тень буквы ${letter}`);
        const shadowRow = index < 4 ? sorterTopShadows : sorterBottomShadows;

        shadowRow?.appendChild(shadow);
    });

    sorterLetter.onpointerdown = beginSorterDrag;
    sorterLetter.onpointermove = moveSorterDrag;
    sorterLetter.onpointerup = finishSorterDrag;
    sorterLetter.onpointercancel = resetSorterLetterPosition;
    showScreen("gameScreen");
}

function buildConnectLineRound(letterData) {
    const usesSpecialWords = isSpecialLetter(letterData.letter);
    const sourceItems = usesSpecialWords
        ? buildSpecialWordSet(letterData, 2, 6, lastSpecialConnectSets)
        : null;
    const correctSource = usesSpecialWords
        ? sourceItems.filter((item) => item.specialCharacter === letterData.letter)
        : shuffleArray(letterData.words).slice(0, 2);
    const correctItems = correctSource.map((word, index) => ({
        id: `correct-${index}`,
        word,
        isCorrect: true,
        specialCharacter: usesSpecialWords ? letterData.letter : null
    }));
    const wrongWordPool = usesSpecialWords
        ? sourceItems.filter((item) => item.specialCharacter !== letterData.letter)
        : alphabet
            .filter((item) => item.letter !== letterData.letter)
            .flatMap((item) => item.words);
    const wrongItems = shuffleArray(wrongWordPool).slice(0, 6).map((wordItem, index) => ({
        id: `wrong-${index}`,
        word: wordItem,
        isCorrect: false,
        specialCharacter: usesSpecialWords ? wordItem.specialCharacter : null
    }));

    return shuffleArray([...correctItems, ...wrongItems]);
}

function getConnectPoint(element, side) {
    const boardRect = connectLineBoard.getBoundingClientRect();
    const rect = element.getBoundingClientRect();

    return {
        x: side === "right"
            ? rect.right - boardRect.left
            : side === "left"
                ? rect.left - boardRect.left
                : rect.left - boardRect.left + rect.width / 2,
        y: rect.top - boardRect.top + rect.height / 2
    };
}

function setConnectLine(line, start, end) {
    line.setAttribute("x1", start.x);
    line.setAttribute("y1", start.y);
    line.setAttribute("x2", end.x);
    line.setAttribute("y2", end.y);
}

function redrawConnectLines() {
    if (!connectLineBoard || connectLineBoard.classList.contains("hidden")) {
        return;
    }

    const boardRect = connectLineBoard.getBoundingClientRect();
    connectLines.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);

    connectMatches.forEach((match) => {
        setConnectLine(match.line, getConnectPoint(connectCenterLetter, "center"), getConnectPoint(match.imageButton, "center"));
    });
}

function cancelActiveConnection(animate = false) {
    if (!activeConnection) {
        return;
    }

    const { line } = activeConnection;

    activeConnection = null;
    connectCenterLetter.releasePointerCapture?.(connectCenterLetter.activePointerId);
    connectCenterLetter.classList.remove("is-connecting");

    if (animate) {
        line.classList.add("is-wrong");
        line.addEventListener("animationend", () => line.remove(), { once: true });
    } else {
        line.remove();
    }
}

function completeConnectLineGame() {
    connectRoundCompleted = true;
    recordMiniGameProgress(selectedLetter.letter, "game4");
    repeatRoundButton.textContent = "Повторить";
    repeatRoundButton.classList.remove("hidden");
    backToLettersButton?.classList.remove("hidden");
    window.AzbukaAudio?.playEffect("win");
    showCelebrationPhrase(getCelebrationPhrase());
}

function finishConnection(event) {
    if (!activeConnection) {
        return;
    }

    const imageButton = document.elementFromPoint(event.clientX, event.clientY)?.closest(".connectImageCard");
    const { line } = activeConnection;

    if (imageButton && imageButton.dataset.correct === "true" && !imageButton.classList.contains("is-matched")) {
        activeConnection = null;
        connectCenterLetter.releasePointerCapture?.(connectCenterLetter.activePointerId);
        connectCenterLetter.classList.remove("is-connecting");
        imageButton.classList.add("is-matched");
        imageButton.disabled = true;
        line.classList.remove("is-drawing");
        line.classList.add("is-fixed");
        setConnectLine(line, getConnectPoint(connectCenterLetter, "center"), getConnectPoint(imageButton, "center"));
        connectMatches.push({ line, imageButton });

        if (connectMatches.length === 2) {
            completeConnectLineGame();
        } else {
            window.AzbukaAudio?.playEffect("correct");
        }

        return;
    }

    window.AzbukaAudio?.playEffect("wrong");
    cancelActiveConnection(true);
}

function beginConnection(event) {
    if (connectRoundCompleted) {
        return;
    }

    event.preventDefault();
    cancelActiveConnection();

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const start = getConnectPoint(connectCenterLetter, "center");

    line.classList.add("connectLine", "is-drawing");
    connectLines.appendChild(line);
    setConnectLine(line, start, start);
    connectCenterLetter.classList.add("is-connecting");
    connectCenterLetter.activePointerId = event.pointerId;
    connectCenterLetter.setPointerCapture?.(event.pointerId);
    activeConnection = { line, start };
}

function moveConnection(event) {
    if (!activeConnection) {
        return;
    }

    const boardRect = connectLineBoard.getBoundingClientRect();
    setConnectLine(activeConnection.line, activeConnection.start, {
        x: Math.max(0, Math.min(event.clientX - boardRect.left, boardRect.width)),
        y: Math.max(0, Math.min(event.clientY - boardRect.top, boardRect.height))
    });
}

function showConnectLineRound(letterData) {
    activeGameMode = "connectLines";
    setActiveGameChoice("connectLines");
    selectedLetter = letterData;
    connectRoundItems = buildConnectLineRound(letterData);
    preloadWordImages(connectRoundItems.map((item) => item.word));
    connectMatches = [];
    connectRoundCompleted = false;
    cancelActiveConnection();
    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();

    if (letterData.letter === "Ъ") {
        setGameScreenTitle("Соедини ", "твёрдый знак", " с двумя подходящими словами");
        connectLineBoard.setAttribute("aria-label", "Соедини твёрдый знак с двумя подходящими словами");
    } else if (letterData.letter === "Ь") {
        setGameScreenTitle("Соедини ", "мягкий знак", " с двумя подходящими словами");
        connectLineBoard.setAttribute("aria-label", "Соедини мягкий знак с двумя подходящими словами");
    } else if (letterData.letter === "Ы") {
        setGameScreenTitle("Соедини букву ", "Ы", " с двумя подходящими словами");
        connectLineBoard.setAttribute("aria-label", "Соедини букву Ы с двумя подходящими словами");
    } else {
        setGameScreenTitle("Соедини букву ", letterData.letter, " с двумя подходящими изображениями");
        connectLineBoard.setAttribute("aria-label", `Соедини букву ${letterData.letter} с двумя подходящими изображениями`);
    }

    document.querySelector(".gameTitle").textContent = "";
    findObjectCards?.classList.add("hidden");
    sorterBoard?.classList.add("hidden");
    busBoard?.classList.add("hidden");
    connectLineBoard?.classList.remove("hidden");
    connectLeftImages.replaceChildren();
    connectRightImages.replaceChildren();
    connectLines.replaceChildren();
    connectCenterLetter.textContent = letterData.letter;
    connectCenterLetter.setAttribute("aria-label", `Буква ${letterData.letter}`);
    repeatRoundButton.textContent = "Новые карточки";
    repeatRoundButton.classList.remove("hidden");
    backToLettersButton?.classList.add("hidden");
    balloons?.classList.add("hidden");

    resetCelebrationOverlay();

    connectRoundItems.forEach((item, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "connectImageCard";
        button.dataset.correct = String(item.isCorrect);
        button.dataset.itemId = item.id;
        button.setAttribute("aria-label", item.word.text);

        if (isSpecialLetter(letterData.letter)) {
            const label = document.createElement("span");

            button.classList.add("specialWordCard");
            label.className = "connectWordLabel";
            appendHighlightedSpecialWord(label, item.word.text, item.specialCharacter);
            button.appendChild(label);
        } else {
            const image = document.createElement("img");

            image.src = item.word.image;
            image.alt = item.word.text;
            button.appendChild(image);
        }

        (index < 4 ? connectLeftImages : connectRightImages).appendChild(button);
    });

    connectCenterLetter.onpointerdown = beginConnection;
    connectCenterLetter.onpointermove = moveConnection;
    connectCenterLetter.onpointerup = finishConnection;
    connectCenterLetter.onpointercancel = () => cancelActiveConnection();

    showScreen("gameScreen");
    requestAnimationFrame(redrawConnectLines);
}

const busRouteSets = [
    [
        { id: "top", path: "M 120 260 C 158 246 185 202 240 170 S 380 92 470 104 S 690 165 850 108" },
        { id: "middle", path: "M 120 260 C 162 260 208 260 260 260 S 390 260 520 260 S 700 260 850 260" },
        { id: "bottom", path: "M 120 260 C 158 276 185 322 240 352 S 380 438 470 416 S 690 350 850 412" }
    ],
    [
        { id: "top", path: "M 120 260 C 158 246 184 202 235 172 S 310 74 440 92 S 655 70 850 122" },
        { id: "middle", path: "M 120 260 C 164 260 208 260 258 258 S 350 212 475 244 S 685 305 850 260" },
        { id: "bottom", path: "M 120 260 C 158 276 184 322 235 350 S 300 456 450 432 S 670 458 850 398" }
    ],
    [
        { id: "top", path: "M 120 260 C 158 246 184 204 235 174 S 300 124 410 138 S 650 198 850 112" },
        { id: "middle", path: "M 120 260 C 164 260 205 260 250 258 S 315 306 455 274 S 670 216 850 260" },
        { id: "bottom", path: "M 120 260 C 158 276 184 318 235 348 S 300 382 430 398 S 650 332 850 414" }
    ],
    [
        { id: "top", path: "M 120 260 C 158 246 184 202 238 172 S 295 82 430 116 S 635 142 850 106" },
        { id: "middle", path: "M 120 260 C 164 260 210 260 262 262 S 336 230 470 258 S 690 288 850 260" },
        { id: "bottom", path: "M 120 260 C 158 276 184 322 238 350 S 310 438 448 404 S 650 370 850 418" }
    ]
];

function getNextBusRouteSet() {
    const availableSets = busRouteSets
        .map((routeSet, index) => ({ routeSet, index }))
        .filter((item) => item.index !== busRouteSetIndex);
    const nextSet = availableSets[Math.floor(Math.random() * availableSets.length)];

    busRouteSetIndex = nextSet.index;
    return nextSet.routeSet;
}

function getNextBusWord(letterData) {
    const previousWord = lastBusWords.get(letterData.letter);
    const availableWords = letterData.words.filter((word) => word.text !== previousWord);
    const nextWord = availableWords[Math.floor(Math.random() * availableWords.length)] ?? letterData.words[0];

    lastBusWords.set(letterData.letter, nextWord.text);
    return nextWord;
}

function buildBusRound(letterData) {
    if (isSpecialLetter(letterData.letter)) {
        return buildSpecialWordSet(letterData, 1, 2, lastBusSets).map((word) => ({
            word,
            isCorrect: word.specialCharacter === letterData.letter
        }));
    }

    const correctWord = getNextBusWord(letterData);
    const wrongWords = shuffleArray(alphabet
        .filter((candidate) => candidate.letter !== letterData.letter)
        .flatMap((candidate) => candidate.words)
    ).slice(0, 2);

    return shuffleArray([
        { word: correctWord, isCorrect: true },
        ...wrongWords.map((word) => ({ word, isCorrect: false }))
    ]);
}

function createBusRouteStates(options, routes) {
    const svgNamespace = "http://www.w3.org/2000/svg";

    busRoadSvg.replaceChildren();
    busRouteStates = routes.map((route, index) => {
        const hitArea = document.createElementNS(svgNamespace, "path");
        const road = document.createElementNS(svgNamespace, "path");
        const dashes = document.createElementNS(svgNamespace, "path");

        hitArea.classList.add("busRoadHitArea");
        road.classList.add("busRoadPath");
        dashes.classList.add("busRoadDashes");
        hitArea.setAttribute("d", route.path);
        road.setAttribute("d", route.path);
        dashes.setAttribute("d", route.path);
        busRoadSvg.append(hitArea, road, dashes);

        const length = road.getTotalLength();
        const samples = Array.from({ length: 141 }, (_, sampleIndex) => {
            const progress = sampleIndex / 140;
            const point = road.getPointAtLength(length * progress);

            return { progress, x: point.x, y: point.y };
        });

        return { ...route, road, length, samples, option: options[index], destination: null };
    });
}

function createBusDestinations() {
    busDestinations.replaceChildren();

    busRouteStates.forEach((routeState) => {
        const destination = document.createElement("div");
        const label = document.createElement("span");
        const endpoint = routeState.road.getPointAtLength(routeState.length);

        destination.className = "busDestination";
        destination.dataset.correct = String(routeState.option.isCorrect);
        destination.setAttribute("aria-label", routeState.option.word.text);
        label.className = "busDestinationLabel";

        if (isSpecialLetter(selectedLetter.letter)) {
            destination.classList.add("specialWordCard");
            appendHighlightedSpecialWord(label, routeState.option.word.text, routeState.option.word.specialCharacter);
        } else {
            const image = document.createElement("img");

            image.src = routeState.option.word.image;
            image.alt = routeState.option.word.text;
            destination.appendChild(image);
            label.textContent = routeState.option.word.text;
        }

        destination.appendChild(label);
        routeState.destination = destination;
        busDestinations.appendChild(destination);
        placeBusElement(destination, endpoint);
    });
}

function placeBusElement(element, point) {
    element.style.left = `${(point.x / 1000) * busBoard.clientWidth}px`;
    element.style.top = `${(point.y / 520) * busBoard.clientHeight}px`;
}

function layoutBusRound() {
    if (busBoard.classList.contains("hidden") || busRouteStates.length === 0) {
        return;
    }

    const activeRoute = busRouteStates[busSelectedRouteIndex ?? 0];

    placeBusElement(busVehicle, activeRoute.road.getPointAtLength(activeRoute.length * busProgress));
    placeBusElement(busStartMarker, activeRoute.road.getPointAtLength(0));
    busRouteStates.forEach((routeState) => {
        placeBusElement(routeState.destination, routeState.road.getPointAtLength(routeState.length));
    });
}

function getBusPointerPoint(event) {
    const rect = busBoard.getBoundingClientRect();

    return {
        x: ((event.clientX - rect.left) / rect.width) * 1000,
        y: ((event.clientY - rect.top) / rect.height) * 520
    };
}

function getNearestBusRoute(pointer, routeStates = busRouteStates, minimumProgress = 0) {
    let nearestRoute = null;
    let nearestSample = null;
    let nearestDistance = Infinity;

    routeStates.forEach((routeState, index) => {
        routeState.samples.filter((sample) => sample.progress >= minimumProgress).forEach((sample) => {
            const distance = Math.hypot(sample.x - pointer.x, sample.y - pointer.y);

            if (distance < nearestDistance) {
                nearestRoute = { routeState, index };
                nearestSample = sample;
                nearestDistance = distance;
            }
        });
    });

    return { nearestRoute, nearestSample, nearestDistance };
}

function moveBusToPointer(event) {
    if (busRoundCompleted || busRouteStates.length === 0 || busSelectedRouteIndex === null) {
        return;
    }

    const pointer = getBusPointerPoint(event);
    const selectedRoute = busRouteStates[busSelectedRouteIndex];
    const { nearestSample, nearestDistance } = getNearestBusRoute(pointer, [selectedRoute]);

    if (!nearestSample
        || nearestDistance > 105
        || nearestSample.progress < busProgress - 0.05
        || nearestSample.progress > busProgress + 0.24) {
        return;
    }

    busProgress = Math.max(busProgress, nearestSample.progress);
    layoutBusRound();

}

function selectBusRoute(event) {
    if (!busDrive || busSelectedRouteIndex !== null) {
        return busSelectedRouteIndex !== null;
    }

    const distanceFromStart = Math.hypot(
        event.clientX - busDrive.startClientX,
        event.clientY - busDrive.startClientY
    );

    if (distanceFromStart < 20) {
        return false;
    }

    const verticalOffset = event.clientY - busDrive.startClientY;
    const directionThreshold = 16;

    busSelectedRouteIndex = verticalOffset <= -directionThreshold
        ? 0
        : verticalOffset >= directionThreshold
            ? 2
            : 1;
    return true;
}

function beginBusDrive(event) {
    if (busRoundCompleted) {
        return;
    }

    event.preventDefault();
    const pointer = getBusPointerPoint(event);

    busDrive = {
        pointerId: event.pointerId,
        startX: pointer.x,
        startY: pointer.y,
        startClientX: event.clientX,
        startClientY: event.clientY
    };
    busVehicle.setPointerCapture?.(event.pointerId);
    busVehicle.classList.add("is-driving");
}

function continueBusDrive(event) {
    if (!busDrive || event.pointerId !== busDrive.pointerId) {
        return;
    }

    if (selectBusRoute(event)) {
        moveBusToPointer(event);
    }
}

function finishBusDrive(event) {
    if (!busDrive || event.pointerId !== busDrive.pointerId) {
        return;
    }

    busVehicle.releasePointerCapture?.(event.pointerId);
    busDrive = null;
    busVehicle.classList.remove("is-driving");

    if (busProgress >= 0.93 && busSelectedRouteIndex !== null) {
        resolveBusDestination();
    } else {
        busVehicle.classList.add("needs-more-road");
        setTimeout(() => busVehicle.classList.remove("needs-more-road"), 520);
    }
}

function cancelBusDrive(event) {
    if (!busDrive || event.pointerId !== busDrive.pointerId) {
        return;
    }

    busVehicle.releasePointerCapture?.(event.pointerId);
    busVehicle.classList.remove("is-driving");
    resetBusVehicle();
}

function resetBusVehicle() {
    busDrive = null;
    busProgress = 0;
    busSelectedRouteIndex = null;
    busVehicle.classList.add("is-returning");
    layoutBusRound();
    setTimeout(() => busVehicle.classList.remove("is-returning"), 300);
}

function resolveBusDestination() {
    const selectedRoute = busRouteStates[busSelectedRouteIndex];

    if (!selectedRoute) {
        resetBusVehicle();
        return;
    }

    busProgress = 1;
    layoutBusRound();

    if (selectedRoute.option.isCorrect) {
        completeBusGame(selectedRoute.destination);
        return;
    }

    selectedRoute.destination.classList.add("is-wrong");
    window.AzbukaAudio?.playEffect("wrong");
    busVehicle.classList.add("needs-more-road");
    setTimeout(() => {
        selectedRoute.destination.classList.remove("is-wrong");
        busVehicle.classList.remove("needs-more-road");
        resetBusVehicle();
    }, 620);
}

function completeBusGame(destination) {
    if (busRoundCompleted || !selectedLetter) {
        return;
    }

    busRoundCompleted = true;
    busDrive = null;
    busProgress = 1;
    layoutBusRound();
    busVehicle.classList.remove("is-driving");
    busVehicle.classList.add("is-arrived");
    destination.classList.add("is-reached");
    recordMiniGameProgress(selectedLetter.letter, "game5");
    repeatRoundButton.textContent = "Повторить";
    repeatRoundButton.classList.remove("hidden");
    backToLettersButton?.classList.remove("hidden");
    window.AzbukaAudio?.playEffect("win");
    showCelebrationPhrase(getCelebrationPhrase());
}

function showBusRound(letterData) {
    const options = buildBusRound(letterData);
    const routes = getNextBusRouteSet();

    preloadWordImages(options.map((option) => option.word));
    activeGameMode = "bus";
    setActiveGameChoice("bus");
    selectedLetter = letterData;
    busRoundCompleted = false;
    busDrive = null;
    busProgress = 0;
    busSelectedRouteIndex = null;
    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();
    cancelActiveConnection();
    resetSorterLetterPosition();
    hideGameBoards();
    busBoard.classList.remove("hidden");
    busVehicle.classList.remove("is-arrived", "is-driving", "needs-more-road", "is-returning");
    createBusRouteStates(options, routes);
    createBusDestinations();

    if (letterData.letter === "Ъ") {
        setGameScreenTitle("Проведи автобус к слову с ", "твёрдым знаком");
    } else if (letterData.letter === "Ь") {
        setGameScreenTitle("Проведи автобус к слову с ", "мягким знаком");
    } else if (letterData.letter === "Ы") {
        setGameScreenTitle("Проведи автобус к слову с буквой ", "Ы");
    } else {
        setGameScreenTitle("Проведи автобус к слову на букву ", letterData.letter);
    }

    document.querySelector(".gameTitle").textContent = "Веди автобус пальцем по дороге";
    repeatRoundButton.textContent = "Новая дорога";
    repeatRoundButton.classList.remove("hidden");
    backToLettersButton?.classList.add("hidden");
    resetCelebrationOverlay();
    showScreen("gameScreen");
    requestAnimationFrame(layoutBusRound);

    busVehicle.onpointerdown = beginBusDrive;
    busVehicle.onpointermove = continueBusDrive;
    busVehicle.onpointerup = finishBusDrive;
    busVehicle.onpointercancel = cancelBusDrive;
}

function handleFindObjectCardClick(card, item) {
    if (findObjectRoundCompleted || card.classList.contains("is-disabled")) {
        return;
    }

    const isCorrect = isCorrectFindObjectWord(item, selectedLetter);

    if (isCorrect) {
        card.classList.add("is-correct", "is-disabled");
        card.disabled = true;
        findObjectCorrectFound += 1;

        if (findObjectCorrectFound >= 2 && !findObjectRoundCompleted) {
            findObjectRoundCompleted = true;
            completeFindObjectGame();
        } else {
            window.AzbukaAudio?.playEffect("correct");
        }

        return;
    }

    card.classList.add("is-wrong");
    window.AzbukaAudio?.playEffect("wrong");
    setTimeout(() => card.classList.remove("is-wrong"), 620);
}

function completeFindObjectGame() {
    window.AzbukaAudio?.playEffect("win");

    if (findObjectRoundCompleted && selectedLetter) {
        recordMiniGameProgress(selectedLetter.letter, "game2");
    }

    if (findObjectCards) {
        findObjectCards.querySelectorAll(".findObjectCard").forEach((gameCard) => {
            gameCard.classList.add("is-disabled");
            gameCard.disabled = true;
        });
    }

    if (repeatRoundButton) {
        repeatRoundButton.textContent = "Повторить";
        repeatRoundButton.classList.remove("hidden");
    }

    if (backToLettersButton) {
        backToLettersButton.classList.remove("hidden");
    }

    showCelebrationPhrase(getCelebrationPhrase());

}

function launchConfetti() {
    const confettiContainer = document.getElementById("confetti");

    if (!confettiContainer) {
        return;
    }

    const colors = ["#ff6b6b", "#ffb703", "#51cf66", "#4dabf7", "#9775fa", "#f56f83"];
    const launchPoints = [16, 34, 50, 66, 84];

    confettiContainer.innerHTML = "";

    for (let index = 0; index < 48; index += 1) {
        const piece = document.createElement("span");
        const launchPoint = launchPoints[index % launchPoints.length];

        piece.className = "confettiPiece";
        piece.style.left = `${launchPoint}%`;
        piece.style.top = `${Math.random() * 24}%`;
        piece.style.background = colors[index % colors.length];
        piece.style.animation = `confettiFall ${1400 + Math.random() * 600}ms ease-out forwards`;
        piece.style.animationDelay = `${index * 18}ms`;
        piece.addEventListener("animationend", () => piece.remove());
        confettiContainer.appendChild(piece);
    }

    setTimeout(() => {
        confettiContainer.innerHTML = "";
    }, 2200);
}

function getCelebrationPhrase() {
    const availablePhrases = celebrationPhrases.filter((phrase) => phrase !== lastCelebrationPhrase);
    const phrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)] ?? celebrationPhrases[0];

    lastCelebrationPhrase = phrase;
    return phrase;
}

function showCelebrationPhrase(phrase) {
    const celebrationOverlay = document.getElementById("findObjectCelebration");

    if (!celebrationOverlay) {
        return;
    }

    celebrationOverlay.textContent = phrase;
    celebrationOverlay.classList.remove("hidden");
    celebrationOverlay.style.animation = "none";
    void celebrationOverlay.offsetWidth;
    celebrationOverlay.style.animation = "findObjectCelebrationReveal 1650ms ease-in-out forwards";

    launchConfetti();
}

function shuffleArray(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));

        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
}

function getRandomWrongLetters(count) {
    const wrongLetters = alphabet
        .filter((letterData) => letterData.letter !== selectedLetter.letter)
        .map((letterData) => letterData.letter);

    return shuffleArray(wrongLetters).slice(0, count);
}

function stopBalloonAnimation() {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = null;
    lastAnimationTime = null;
    movingBalloons = [];
}

function getBalloonSize() {
    if (window.matchMedia("(min-width: 320px) and (max-width: 430px)").matches) {
        return Math.min(76, Math.max(58, window.innerWidth * 0.18));
    }

    return desktopBalloonSize;
}

function createMobileBalloonPositions(count, size, fieldWidth, fieldHeight) {
    const columns = Math.max(2, Math.min(count, Math.floor(fieldWidth / (size * 1.05))));
    const rows = Math.ceil(count / columns);
    const maxLeft = Math.max(0, fieldWidth - size);
    const maxTop = Math.max(0, fieldHeight - size);
    const horizontalStep = columns > 1 ? maxLeft / (columns - 1) : 0;
    const verticalStep = rows > 1 ? maxTop / (rows - 1) : 0;
    const positions = [];

    for (let index = 0; index < count; index += 1) {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const rowItemCount = Math.min(columns, count - row * columns);
        const rowOffset = rowItemCount < columns ? (columns - rowItemCount) * horizontalStep / 2 : 0;

        positions.push({
            left: Math.min(maxLeft, rowOffset + column * horizontalStep),
            top: row * verticalStep
        });
    }

    return shuffleArray(positions);
}

function moveBalloons(currentTime) {
    if (lastAnimationTime === null) {
        lastAnimationTime = currentTime;
    }

    const timePassed = Math.min((currentTime - lastAnimationTime) / 1000, 0.05);
    movingBalloons.forEach((balloonData) => {
        const maxLeft = Math.max(0, balloons.clientWidth - balloonData.size);
        const maxTop = Math.max(0, balloons.clientHeight - balloonData.size);

        balloonData.left += balloonData.speedX * timePassed;
        balloonData.top += balloonData.speedY * timePassed;

        if (balloonData.left <= 0 || balloonData.left >= maxLeft) {
            balloonData.left = Math.max(0, Math.min(balloonData.left, maxLeft));
            balloonData.speedX *= -1;
        }

        if (balloonData.top <= 0 || balloonData.top >= maxTop) {
            balloonData.top = Math.max(0, Math.min(balloonData.top, maxTop));
            balloonData.speedY *= -1;
        }

        balloonData.element.style.left = `${balloonData.left}px`;
        balloonData.element.style.top = `${balloonData.top}px`;
    });

    lastAnimationTime = currentTime;

    if (movingBalloons.length > 0) {
        animationFrameId = requestAnimationFrame(moveBalloons);
    }
}

function startBalloonAnimation() {
    lastAnimationTime = null;
    animationFrameId = requestAnimationFrame(moveBalloons);
}

function createExplosion(balloon) {
    const size = balloon.offsetWidth || getBalloonSize();
    const centerLeft = parseFloat(balloon.style.left) + size / 2;
    const centerTop = parseFloat(balloon.style.top) + size / 2;
    const particleCount = 8 + Math.floor(Math.random() * 5);

    for (let index = 0; index < particleCount; index += 1) {
        const particle = document.createElement("div");
        const direction = (Math.PI * 2 * index) / particleCount + (Math.random() - 0.5) * 0.4;
        const distance = 45 + Math.random() * 35;
        const size = 8 + Math.random() * 7;

        particle.style.position = "absolute";
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${centerLeft - size / 2}px`;
        particle.style.top = `${centerTop - size / 2}px`;
        particle.style.borderRadius = "50%";
        particle.style.background = balloonColors[index % balloonColors.length];
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "2";
        particle.style.transition = "left 400ms ease-out, top 400ms ease-out, opacity 400ms ease-out, transform 400ms ease-out";
        balloons.appendChild(particle);

        requestAnimationFrame(() => {
            particle.style.left = `${centerLeft + Math.cos(direction) * distance - size / 2}px`;
            particle.style.top = `${centerTop + Math.sin(direction) * distance - size / 2}px`;
            particle.style.opacity = "0";
            particle.style.transform = "scale(0.4)";
        });

        setTimeout(() => {
            particle.remove();
        }, 420);
    }
}

function finishRound() {
    window.AzbukaAudio?.playEffect("win");
    recordMiniGameCompletion(selectedLetter.letter);
    stopBalloonAnimation();
    balloons.innerHTML = "";

    const celebration = document.createElement("div");
    const phrase = getCelebrationPhrase();
    celebration.textContent = phrase;
    celebration.style.position = "fixed";
    celebration.style.top = "50%";
    celebration.style.left = "50%";
    celebration.style.zIndex = "10";
    celebration.style.width = "90vw";
    celebration.style.textAlign = "center";
    celebration.style.fontSize = "clamp(48px, 11vw, 96px)";
    celebration.style.fontWeight = "bold";
    celebration.style.background = "linear-gradient(90deg, #ff6b6b, #ffb703, #51cf66, #4dabf7)";
    celebration.style.webkitBackgroundClip = "text";
    celebration.style.backgroundClip = "text";
    celebration.style.color = "transparent";
    celebration.style.webkitTextStroke = "2px white";
    celebration.style.textShadow = "0 6px 14px rgba(0, 0, 0, 0.25)";
    celebration.style.opacity = "0";
    celebration.style.transform = "translate(-50%, -50%) scale(0.5)";
    celebration.style.transition = "transform 300ms ease-out, opacity 300ms ease-out";
    balloons.appendChild(celebration);

    requestAnimationFrame(() => {
        celebration.style.opacity = "1";
        celebration.style.transform = "translate(-50%, -50%) scale(1)";
    });

    setTimeout(() => {
        celebration.style.opacity = "0";
        celebration.style.transform = "translate(-50%, -50%) scale(1.1)";
    }, 900);

    nextRoundTimeout = setTimeout(() => {
        nextRoundTimeout = null;
        createGameRound();
    }, 1300);
}

function handleBalloonClick(balloon, letter) {
    if (letter === selectedLetter.letter) {
        if (balloon.isPopping) {
            return;
        }

        balloon.isPopping = true;
        balloon.disabled = true;
        movingBalloons = movingBalloons.filter((balloonData) => balloonData.element !== balloon);
        balloon.style.transition = "transform 300ms cubic-bezier(0.2, 0.8, 0.3, 1), opacity 260ms ease-out";
        createExplosion(balloon);

        if (correctBalloonsLeft > 1) {
            window.AzbukaAudio?.playEffect("correct");
        }

        const rotation = Math.round(Math.random() * 50 - 25);

        requestAnimationFrame(() => {
            balloon.style.transform = `scale(1.7) rotate(${rotation}deg)`;
            balloon.style.opacity = "0";
        });

        setTimeout(() => {
            balloon.remove();
            correctBalloonsLeft -= 1;

            if (correctBalloonsLeft === 0) {
                setTimeout(finishRound, 150);
            }
        }, 300);

        return;
    }

    balloon.style.transform = "translateY(-8px) scale(1.1)";
    window.AzbukaAudio?.playEffect("wrong");
    setTimeout(() => {
        balloon.style.transform = "";
    }, 200);
}

function showBalloonGame(letterData) {
    activeGameMode = "balloons";
    setActiveGameChoice("balloons");
    selectedLetter = letterData;
    cancelActiveConnection();
    findObjectCards?.classList.add("hidden");
    connectLineBoard?.classList.add("hidden");
    sorterBoard?.classList.add("hidden");
    busBoard?.classList.add("hidden");
    balloons?.classList.remove("hidden");
    repeatRoundButton?.classList.add("hidden");
    backToLettersButton?.classList.add("hidden");
    setGameScreenTitle("Лопни шарики с буквой ", letterData.letter);
    document.querySelector(".gameTitle").textContent = "Найди 3 шарика";
    resetCelebrationOverlay();
    showScreen("gameScreen");
    createGameRound();
}

function createGameRound() {
    if (!selectedLetter) {
        return;
    }

    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();
    balloons.innerHTML = "";
    if (targetLetter) {
        targetLetter.textContent = selectedLetter.letter;
    }
    correctBalloonsLeft = 3;

    const roundLetters = shuffleArray([
        selectedLetter.letter,
        selectedLetter.letter,
        selectedLetter.letter,
        ...getRandomWrongLetters(7)
    ]);

    const size = getBalloonSize();
    const maxLeft = Math.max(0, balloons.clientWidth - size);
    const maxTop = Math.max(0, balloons.clientHeight - size);
    const usesMobileLayout = window.matchMedia("(min-width: 320px) and (max-width: 430px)").matches;
    const mobilePositions = usesMobileLayout
        ? createMobileBalloonPositions(roundLetters.length, size, balloons.clientWidth, balloons.clientHeight)
        : null;

    roundLetters.forEach((letter, index) => {
        const balloon = document.createElement("button");
        balloon.className = "balloon";
        balloon.type = "button";
        balloon.textContent = letter;
        balloon.style.background = balloonColors[index % balloonColors.length];
        const left = mobilePositions?.[index].left ?? Math.random() * maxLeft;
        const top = mobilePositions?.[index].top ?? Math.random() * maxTop;
        const direction = Math.random() * Math.PI * 2;
        const speed = 10 + Math.random() * 18;
        const drift = 0.4 + Math.random() * 0.8;

        balloon.style.left = `${left}px`;
        balloon.style.top = `${top}px`;
        balloon.addEventListener("click", () => handleBalloonClick(balloon, letter));
        balloons.appendChild(balloon);
        movingBalloons.push({
            element: balloon,
            left,
            top,
            size,
            speedX: Math.cos(direction) * speed * drift,
            speedY: Math.sin(direction) * speed * (0.7 + Math.random() * 0.6)
        });
    });

    startBalloonAnimation();
}

alphabet.forEach((letterData) => {
    const wrapper = document.createElement("div");
    const ring = document.createElement("div");
    const card = document.createElement("div");

    wrapper.className = "letterCardWrapper";
    ring.className = "letterProgressRing";
    card.className = "letterCard";
    card.textContent = letterData.letter;

    miniGameIds.forEach((gameId, index) => {
        const segment = document.createElement("div");

        segment.className = "letterProgressSegment";
        segment.dataset.gameId = gameId;
        segment.style.setProperty("--segment-start", `${index * 72}deg`);
        ring.appendChild(segment);
    });

    wrapper.appendChild(ring);
    wrapper.appendChild(card);
    letterCards.set(letterData.letter, card);
    letterProgressRings.set(letterData.letter, ring);
    updateLetterCardProgress(letterData.letter);
    card.addEventListener("click", () => {
        preloadWordImages(letterData.words);

        if (letterSelectionTimeout !== null) {
            return;
        }

        letterSelectionTimeout = setTimeout(() => {
            letterSelectionTimeout = null;
            showLetter(letterData);
        }, letterSelectionDelay);
    });
    lettersGrid.appendChild(wrapper);
});

updateProgressUI();
updateSoundToggle();

letterImage?.addEventListener("click", () => {
    window.AzbukaAudio?.playWord(displayedLetterWord?.audio);
});

wordsBlock?.addEventListener("click", () => {
    window.AzbukaAudio?.playWord(displayedLetterWord?.audio);
});

document.getElementById("startButton").addEventListener("click", () => {
    window.AzbukaAudio?.prepare();
    window.AzbukaAudio?.playEffect("celebration");
    showScreen("lettersScreen");
});

document.getElementById("backHomeButton").addEventListener("click", () => {
    showScreen("homeScreen");
});

document.getElementById("backLettersButton").addEventListener("click", () => {
    showScreen("lettersScreen");
});

if (settingsButton) {
    settingsButton.addEventListener("click", () => {
        openSettingsModal();
    });
}

if (soundToggleButton) {
    soundToggleButton.addEventListener("click", () => {
        window.AzbukaAudio?.setEnabled(!window.AzbukaAudio.isEnabled());
        updateSoundToggle();
    });
}

if (closeSettingsButton) {
    closeSettingsButton.addEventListener("click", () => {
        closeSettingsModal();
    });
}

if (settingsOverlay) {
    settingsOverlay.addEventListener("click", (event) => {
        if (event.target === settingsOverlay) {
            closeSettingsModal();
        }
    });
}

if (showResetConfirmButton) {
    showResetConfirmButton.addEventListener("click", () => {
        showResetProgressConfirmation();
    });
}

if (cancelResetButton) {
    cancelResetButton.addEventListener("click", () => {
        closeSettingsModal();
    });
}

if (confirmResetButton) {
    confirmResetButton.addEventListener("click", () => {
        resetCompletedLettersProgress();
        closeSettingsModal();
    });
}

document.getElementById("playGameButton").addEventListener("click", () => {
    window.AzbukaAudio?.playEffect("click");
    showFindObjectRound(selectedLetter);
});

if (playBalloonsGameButton) {
    playBalloonsGameButton.addEventListener("click", () => {
        window.AzbukaAudio?.playEffect("click");
        showBalloonGame(selectedLetter);
    });
}

if (playSorterGameButton) {
    playSorterGameButton.addEventListener("click", () => {
        window.AzbukaAudio?.playEffect("click");
        showSorterRound(selectedLetter);
    });
}

if (playConnectGameButton) {
    playConnectGameButton.addEventListener("click", () => {
        window.AzbukaAudio?.playEffect("click");
        showConnectLineRound(selectedLetter);
    });
}

if (playBusGameButton) {
    playBusGameButton.addEventListener("click", () => {
        window.AzbukaAudio?.playEffect("click");
        showBusRound(selectedLetter);
    });
}

if (repeatRoundButton) {
    repeatRoundButton.addEventListener("click", () => {
        window.AzbukaAudio?.playEffect("click");
        if (activeGameMode === "connectLines") {
            showConnectLineRound(selectedLetter);
        } else if (activeGameMode === "sorter") {
            showSorterRound(selectedLetter);
        } else if (activeGameMode === "bus") {
            showBusRound(selectedLetter);
        } else {
            showFindObjectRound(selectedLetter);
        }
    });
}

if (backToLettersButton) {
    backToLettersButton.addEventListener("click", () => {
        showScreen("lettersScreen");
    });
}

document.getElementById("backLetterButton").addEventListener("click", () => {
    cancelActiveConnection();
    resetSorterLetterPosition();
    busDrive = null;
    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();
    showScreen("letterScreen");
});

window.addEventListener("resize", () => {
    redrawConnectLines();
    layoutBusRound();
});

showScreen("homeScreen");
