// Keep the app interface free from native copy/translate and drag menus.
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("dragstart", (event) => event.preventDefault());

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
        Велосипед: "bicycle.webp",
        Вишня: "cherry.webp",
        Волк: "wolf.webp",
        Ворона: "crow.webp",
        Ведро: "bucket.webp"
    },
    Г: {
        Груша: "pear.webp",
        Гриб: "mushroom.webp",
        Гусеница: "caterpillar.webp",
        Гитара: "guitar.webp",
        Голубь: "pigeon.webp"
    },
    Д: {
        Дом: "house.webp",
        Дерево: "tree.webp",
        Дельфин: "dolphin.webp",
        Дорога: "road.webp",
        Дракон: "dragon.webp"
    },
    Е: {
        Енот: "raccoon.webp",
        Ежевика: "blackberry.webp",
        Ель: "fir_tree.webp",
        Ехидна: "echidna.webp",
        Еда: "food.webp"
    },
    Ё: {
        Ёж: "hedgehog.webp",
        Ёлка: "christmas_tree.webp",
        Ёрш: "ruff.webp",
        Ёжик: "little_hedgehog.webp",
        "Ёлочная игрушка": "christmas_ornament.webp"
    },
    Ж: {
        Жираф: "giraffe.webp",
        Жук: "beetle.webp",
        Жаба: "toad.webp",
        Журавль: "crane.webp",
        Жёлудь: "acorn.webp"
    },
    З: {
        Заяц: "hare.webp",
        Зебра: "zebra.webp",
        Зонт: "umbrella.webp",
        Звезда: "star.webp",
        Земляника: "wild_strawberry.webp"
    },
    И: {
        Игрушка: "toy.webp",
        Индюк: "turkey.webp",
        Игла: "needle.webp",
        Ирис: "iris.webp",
        Индейка: "female_turkey.webp"
    },
    Й: {
        Йогурт: "yogurt.webp",
        Йод: "iodine.webp",
        Йети: "yeti.webp",
        Йорк: "yorkie.webp",
        Йога: "yoga.webp"
    },
    К: {
        Корабль: "ship.webp",
        Кот: "cat.webp",
        Карандаш: "pencil.webp",
        Кукла: "doll.webp",
        Крокодил: "crocodile.webp"
    },
    Л: {
        Лиса: "fox.webp",
        Лев: "lion.webp",
        Луна: "moon.webp",
        Лимон: "lemon.webp",
        Лодка: "boat.webp"
    },
    М: {
        Мяч: "ball.webp",
        Медведь: "bear.webp",
        Машина: "car.webp",
        Молоко: "milk.webp",
        Море: "sea.webp"
    },
    Н: {
        Носорог: "rhinoceros.webp",
        Носки: "socks.webp",
        Небо: "sky.webp",
        Нитки: "thread.webp",
        Нора: "burrow.webp"
    },
    О: {
        Облако: "cloud.webp",
        Окно: "window.webp",
        Остров: "island.webp",
        Одуванчик: "dandelion.webp",
        Осьминог: "octopus.webp"
    },
    П: {
        Птица: "bird.webp",
        Панда: "panda.webp",
        Пирог: "pie.webp",
        Пальма: "palm_tree.webp",
        Паровоз: "steam_locomotive.webp"
    },
    Р: {
        Радуга: "rainbow.webp",
        Рыба: "fish.webp",
        Ракета: "rocket.webp",
        Робот: "robot.webp",
        Ромашка: "daisy.webp"
    },
    С: {
        Солнце: "sun.webp",
        Собака: "dog.webp",
        Слон: "elephant.webp",
        Сыр: "cheese.webp",
        Самолёт: "airplane.webp"
    },
    Т: {
        Тигр: "tiger.webp",
        Торт: "cake.webp",
        Туча: "cloud_dark.webp",
        Трактор: "tractor.webp",
        Телефон: "telephone.webp"
    },
    У: {
        Утка: "duck.webp",
        Улитка: "snail.webp",
        Улыбка: "smile.webp",
        Улица: "street.webp",
        Утюг: "iron.webp"
    },
    Ф: {
        Фонарик: "flashlight.webp",
        Фламинго: "flamingo.webp",
        Фея: "fairy.webp",
        Флаг: "flag.webp",
        Фрукты: "fruits.webp"
    },
    Х: {
        Хлеб: "bread.webp",
        Хомяк: "hamster.webp",
        Хвост: "tail.webp",
        Холодильник: "refrigerator.webp",
        Художник: "artist.webp"
    },
    Ц: {
        Цыплёнок: "chick.webp",
        Цветок: "flower.webp",
        Цирк: "circus.webp",
        Цапля: "heron.webp",
        Цифра: "number.webp"
    },
    Ч: {
        Черепаха: "turtle.webp",
        Часы: "clock.webp",
        Чайник: "teapot.webp",
        Чемодан: "suitcase.webp",
        Чашка: "cup.webp"
    },
    Ш: {
        Шар: "balloon.webp",
        Шуба: "fur_coat.webp",
        Шоколад: "chocolate.webp",
        Шишка: "pinecone.webp",
        Шмель: "bumblebee.webp"
    },
    Щ: {
        Щука: "pike.webp",
        Щенок: "puppy.webp",
        Щётка: "brush.webp",
        Щавель: "sorrel.webp",
        Щит: "shield.webp"
    },
    Ъ: {
        Подъезд: "entrance.webp",
        Объём: "volume.webp",
        Съёмка: "filming.webp",
        Объявление: "notice.webp",
        Съезд: "congress.webp"
    },
    Ы: {
        Сырок: "syrok.webp",
        Лыжи: "lyzhi.webp",
        Дым: "smoke.webp",
        Тыква: "tykva.webp",
        Мыло: "mylo.webp"
    },
    Ь: {
        Семья: "family.webp",
        Конь: "horse.webp",
        Пальто: "coat.webp",
        Мальчик: "boy.webp",
        Степь: "step.webp"
    },
    Э: {
        Эскимо: "popsicle.webp",
        Экран: "screen.webp",
        Экскаватор: "excavator.webp",
        Эхо: "echo.webp",
        Этажерка: "shelf.webp"
    },
    Ю: {
        Юла: "spinning_top.webp",
        Юбка: "skirt.webp",
        Юрта: "yurt.webp",
        Юнга: "cabin_boy.webp",
        Юмор: "humor.webp"
    },
    Я: {
        Яблоко: "apple.webp",
        Ягода: "berry.webp",
        Якорь: "anchor.webp",
        Ящерица: "lizard.webp",
        Яйцо: "egg.webp"
    }
};
const sharedWordImagePaths = {
    Ы: {
        Мыло: "assets/images/letters/yery/mylo.webp"
    }
};

function getLetterFolderName(letter) {
    const normalizedLetter = letter.toLowerCase();

    return transliteration[normalizedLetter] !== undefined
        ? transliteration[normalizedLetter]
        : normalizedLetter;
}

function createWord(letter, text) {
    const customImages = customWordImages[letter];
    const sharedLetterImages = sharedWordImagePaths[letter];
    const sharedImagePath = sharedLetterImages ? sharedLetterImages[text] : undefined;
    const customImageName = customImages ? customImages[text] : undefined;
    const imageName = customImageName !== undefined
        ? customImageName
        : `${text
            .toLowerCase()
            .split("")
            .map((character) => wordTransliteration[character] !== undefined
                ? wordTransliteration[character]
                : character)
            .join("")
            .replace(/\s+/g, "-")}.webp`;

    const audioName = text
        .toLowerCase()
        .split("")
        .map((character) => wordTransliteration[character] !== undefined
            ? wordTransliteration[character]
            : character)
        .join("")
        .replace(/\s+/g, "-");

    return {
        text,
        image: sharedImagePath !== undefined
            ? sharedImagePath
            : `assets/images/letters/${getLetterFolderName(letter)}/${imageName}`,
        audio: audioName
    };
}

function createWords(letter, words) {
    return words.map((word) => createWord(letter, word));
}

const russianAlphabet = [
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

const russianInterface = Object.freeze({
    appTitle: "АЗБУКА",
    appSubtitle: "Изучаем русский алфавит",
    start: "Начать",
    install: "Установить приложение",
    chooseLetter: "Выбери букву",
    progress: "Пройдено",
    of: "из",
    demoNotice: "Демо: доступны А, Б и В",
    parents: "Для родителей",
    settingsDescription: "Управление прогрессом ребёнка.",
    language: "Язык и алфавит",
    soundOn: "Звук: включён",
    soundOff: "Звук: выключен",
    resetProgress: "Сбросить весь прогресс",
    resetQuestion: "Сбросить весь прогресс? Все пройденные буквы снова станут непройденными",
    cancel: "Отмена",
    reset: "Сбросить",
    close: "Закрыть",
    fullVersion: "Полная версия",
    lockedLetter: "Эта буква доступна в полной версии приложения",
    buyFullVersion: "Купить полную версию",
    purchasePending: "Платёж ожидает подтверждения в Google Play",
    purchaseCanceled: "Покупка отменена. Полный доступ не был активирован",
    playUnavailable: "Google Play временно недоступен. Попробуйте ещё раз",
    openingPlay: "Открываем Google Play…",
    purchaseUnavailable: "Покупка сейчас недоступна. Попробуйте позже",
    back: "Назад",
    letter: "Буква",
    nextWord: "Следующее слово",
    balloons: "Шарики",
    findTwoWords: "Найди два слова",
    findShadow: "Найди тень",
    connect: "Соедини линией",
    driveBus: "Проведи автобус",
    newCards: "Новые карточки",
    newShadows: "Новые тени",
    newRoad: "Новая дорога",
    repeat: "Повторить",
    toLetters: "К буквам",
    startMarker: "Старт",
    gameChoiceLabel: "Выбор мини-игры",
    wordCardsLabel: "Карточки слов",
    sorterBoardLabel: "Перетащи букву к её тени",
    shadowLetter: "Тень буквы",
    busBoardLabel: "Проведи автобус по дороге к слову",
    busLabel: "Автобус",
    loadingImageLabel: "Загрузка изображения",
    celebrations: ["Молодец!", "Здорово!", "Отлично!", "Супер!", "Умница!"]
});

const russianLanguagePack = Object.freeze({
    id: "ru",
    label: "Русский алфавит",
    nativeLabel: "Русский",
    alphabet: russianAlphabet,
    freeLetters: ["А", "Б", "В"],
    textOnlyLetters: ["Ъ", "Ы", "Ь"],
    interface: russianInterface
});
const languagePacks = {
    ru: russianLanguagePack,
    "en-US": window.AzbukaLanguages && window.AzbukaLanguages["en-US"],
    "es-419": window.AzbukaLanguages && window.AzbukaLanguages["es-419"]
};
const languageStorageKey = "azbukaLanguage";
const storedLanguageId = localStorage.getItem(languageStorageKey);
let currentLanguageId = languagePacks[storedLanguageId] ? storedLanguageId : "ru";
let currentLanguagePack = languagePacks[currentLanguageId];
let alphabet = currentLanguagePack.alphabet;
let FREE_LETTERS = new Set(currentLanguagePack.freeLetters);
const TEMPORARILY_UNLOCK_ALL_LETTERS = false;
const GITHUB_PAGES_HOSTNAME = "alex66bav-dot.github.io";
const androidBilling = window.Capacitor
    && typeof window.Capacitor.isNativePlatform === "function"
    && window.Capacitor.isNativePlatform()
    && window.Capacitor.Plugins
    ? window.Capacitor.Plugins.AzbukaBilling
    : null;
let androidFullAccess = false;

function isDemoMode() {
    if (window.location.hostname === GITHUB_PAGES_HOSTNAME) {
        return true;
    }

    return new URLSearchParams(window.location.search).get("demo") === "1";
}

function hasFullAccess() {
    if (androidBilling) {
        return androidFullAccess;
    }

    return !isDemoMode();
}

function isLetterUnlocked(letter) {
    return TEMPORARILY_UNLOCK_ALL_LETTERS || hasFullAccess() || FREE_LETTERS.has(letter);
}

function getAccessibleAlphabet() {
    return alphabet.filter((letterData) => isLetterUnlocked(letterData.letter));
}

let selectedLetter = null;
let displayedLetterWord = null;
let wordIndexes = createWordIndexes();

function createWordIndexes() {
    return alphabet.reduce((indexes, letterData) => {
        indexes[letterData.letter] = 0;
        return indexes;
    }, {});
}

const lettersGrid = document.getElementById("lettersGrid");
const appTitle = document.getElementById("appTitle");
const appSubtitle = document.getElementById("appSubtitle");
const startButton = document.getElementById("startButton");
const installButton = document.getElementById("installButton");
const chooseLetterTitle = document.getElementById("chooseLetterTitle");
const progressLabel = document.getElementById("progressLabel");
const settingsTitle = document.getElementById("settingsTitle");
const settingsDescription = document.querySelector(".settingsDescription");
const languageSettingsLabel = document.getElementById("languageSettingsLabel");
const bigLetter = document.getElementById("bigLetter");
const letterTitle = document.getElementById("letterTitle");
const letterImage = document.getElementById("letterImage");
const wordsBlock = document.getElementById("wordsBlock");
const nextWordButton = document.getElementById("nextWordButton");
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
const demoNotice = document.getElementById("demoNotice");
const fullVersionOverlay = document.getElementById("fullVersionOverlay");
const fullVersionText = document.getElementById("fullVersionText");
const closeFullVersionButton = document.getElementById("closeFullVersionButton");
const confirmFullVersionButton = document.getElementById("confirmFullVersionButton");
const showResetConfirmButton = document.getElementById("showResetConfirmButton");
const resetConfirmBlock = document.getElementById("resetConfirmBlock");
const resetConfirmText = resetConfirmBlock ? resetConfirmBlock.querySelector("p") : null;
const cancelResetButton = document.getElementById("cancelResetButton");
const confirmResetButton = document.getElementById("confirmResetButton");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const soundToggleButton = document.getElementById("soundToggleButton");
const languageButtons = document.querySelectorAll(".languageButton");
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
let celebrationPhrases = currentLanguagePack.interface.celebrations;
const desktopBalloonSize = 90;
let totalLettersCount = alphabet.length;
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
let busRouteStarted = false;
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
let completedLettersStorageKey = getProgressStorageKey("azbukaCompletedLetters");
let miniGameProgressStorageKey = getProgressStorageKey("azbukaMiniGameProgress");
let miniGameProgressVersionKey = getProgressStorageKey("azbukaMiniGameProgressVersion");
const currentMiniGameProgressVersion = 2;
const miniGameIds = ["game1", "game2", "game3", "game4", "game5"];
let completedLetters = new Set(loadCompletedLetters());
let miniGameProgress = loadMiniGameProgress();
const letterCards = new Map();
const letterProgressRings = new Map();

function getProgressStorageKey(baseKey) {
    return currentLanguageId === "ru" ? baseKey : `${baseKey}:${currentLanguageId}`;
}

function setElementText(element, value) {
    if (element) {
        element.textContent = value;
    }
}

function applyInterfaceLanguage() {
    const ui = currentLanguagePack.interface;

    document.documentElement.lang = currentLanguageId === "ru"
        ? "ru"
        : currentLanguageId === "es-419" ? "es-419" : "en";
    document.title = ui.appTitle;
    setElementText(appTitle, ui.appTitle);
    setElementText(appSubtitle, ui.appSubtitle);
    setElementText(startButton, ui.start);
    setElementText(installButton, ui.install);
    setElementText(chooseLetterTitle, ui.chooseLetter);
    setElementText(progressLabel, ui.progress);
    setElementText(demoNotice, ui.demoNotice);
    setElementText(settingsTitle, ui.parents);
    setElementText(settingsDescription, ui.settingsDescription);
    setElementText(languageSettingsLabel, ui.language);
    setElementText(showResetConfirmButton, ui.resetProgress);
    setElementText(resetConfirmText, ui.resetQuestion);
    setElementText(cancelResetButton, ui.cancel);
    setElementText(confirmResetButton, ui.reset);
    setElementText(closeSettingsButton, ui.close);
    setElementText(document.getElementById("fullVersionTitle"), ui.fullVersion);
    setElementText(fullVersionText, ui.lockedLetter);
    setElementText(confirmFullVersionButton, ui.buyFullVersion);
    setElementText(document.getElementById("backLettersButton"), `← ${ui.back}`);
    setElementText(nextWordButton, ui.nextWord);
    setElementText(playBalloonsGameButton, ui.balloons);
    setElementText(document.getElementById("playGameButton"), ui.findTwoWords);
    setElementText(playSorterGameButton, ui.findShadow);
    setElementText(playConnectGameButton, ui.connect);
    setElementText(playBusGameButton, ui.driveBus);
    setElementText(backToLettersButton, ui.toLetters);
    setElementText(busStartMarker, ui.startMarker);

    [
        [".gameChoicePanel", ui.gameChoiceLabel],
        ["#findObjectCards", ui.wordCardsLabel],
        ["#sorterBoard", ui.sorterBoardLabel],
        ["#busBoard", ui.busBoardLabel],
        ["#busVehicle", ui.busLabel]
    ].forEach(([selector, label]) => {
        const element = document.querySelector(selector);
        if (element) {
            element.setAttribute("aria-label", label);
        }
    });

    languageButtons.forEach((button) => {
        const isActive = button.dataset.language === currentLanguageId;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    updateSoundToggle();
    updateProgressUI();
}

function switchLanguage(languageId) {
    if (!languagePacks[languageId] || languageId === currentLanguageId) {
        return;
    }

    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();
    cancelActiveConnection();
    resetSorterLetterPosition();
    currentLanguageId = languageId;
    currentLanguagePack = languagePacks[currentLanguageId];
    alphabet = currentLanguagePack.alphabet;
    FREE_LETTERS = new Set(currentLanguagePack.freeLetters);
    totalLettersCount = alphabet.length;
    celebrationPhrases = currentLanguagePack.interface.celebrations;
    completedLettersStorageKey = getProgressStorageKey("azbukaCompletedLetters");
    miniGameProgressStorageKey = getProgressStorageKey("azbukaMiniGameProgress");
    miniGameProgressVersionKey = getProgressStorageKey("azbukaMiniGameProgressVersion");
    completedLetters = new Set(loadCompletedLetters());
    miniGameProgress = loadMiniGameProgress();
    selectedLetter = null;
    displayedLetterWord = null;
    wordIndexes = createWordIndexes();
    lastSpecialFindSets.clear();
    lastSpecialConnectSets.clear();
    lastBusWords.clear();
    lastBusSets.clear();
    localStorage.setItem(languageStorageKey, currentLanguageId);
    renderLettersGrid();
    applyInterfaceLanguage();
    if (demoNotice) {
        demoNotice.classList.toggle("hidden", Boolean(androidBilling) || !isDemoMode());
    }
    if (!document.getElementById("homeScreen").classList.contains("active")) {
        showScreen("lettersScreen");
    }
}

function addClass(element, className) {
    if (element) {
        element.classList.add(className);
    }
}

function removeClass(element, className) {
    if (element) {
        element.classList.remove(className);
    }
}

function playAudioEffect(name) {
    if (window.AzbukaAudio) {
        window.AzbukaAudio.playEffect(name);
    }
}

function playGameInstruction(letterData, gameNumber) {
    if (window.AzbukaAudio && letterData) {
        window.AzbukaAudio.playInstruction(getLetterFolderName(letterData.letter), gameNumber, currentLanguageId);
    }
}

function loadCompletedLetters() {
    try {
        const storedValue = localStorage.getItem(completedLettersStorageKey);
        const storedLetters = JSON.parse(storedValue !== null ? storedValue : "[]");

        return Array.isArray(storedLetters)
            ? storedLetters.filter((letter) => alphabet.some((letterData) => letterData.letter === letter))
            : [];
    } catch (error) {
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
        return normalizeCompletedGames(value.completedGames !== undefined ? value.completedGames : []);
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
        const storedValue = localStorage.getItem(miniGameProgressStorageKey);
        const storedProgress = JSON.parse(storedValue !== null ? storedValue : "{}");
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
    } catch (error) {
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
        if (storedVersion < currentMiniGameProgressVersion) {
            localStorage.setItem(miniGameProgressStorageKey, JSON.stringify(fallbackProgress));
        }
        localStorage.setItem(miniGameProgressVersionKey, String(currentMiniGameProgressVersion));
    } catch (error) {
        // Progress migration stays available in memory.
    }

    return fallbackProgress;
}

function updateProgressUI() {
    const completedCount = alphabet.filter((letterData) => getCompletedGames(letterData.letter).length === miniGameIds.length).length;
    const progressPercent = Math.round((completedCount / totalLettersCount) * 100);

    if (progressText) {
        progressText.textContent = `${completedCount} ${currentLanguagePack.interface.of} ${totalLettersCount}`;
    }

    if (progressBarFill) {
        progressBarFill.style.width = `${progressPercent}%`;
    }
}

function saveMiniGameProgress() {
    try {
        localStorage.setItem(miniGameProgressStorageKey, JSON.stringify(miniGameProgress));
        localStorage.setItem(miniGameProgressVersionKey, String(currentMiniGameProgressVersion));
    } catch (error) {
        // Progress remains available until the page is reloaded.
    }
}

function getCompletedGames(letter) {
    const letterProgress = miniGameProgress[letter];
    return normalizeCompletedGames(
        letterProgress && letterProgress.completedGames !== undefined
            ? letterProgress.completedGames
            : []
    );
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
    if (!isLetterUnlocked(letter)) {
        return;
    }

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

    if (!isLetterUnlocked(letter)) {
        if (progressRing) {
            progressRing.querySelectorAll(".letterProgressSegment").forEach((segment) => {
                segment.classList.remove("is-complete");
            });
        }
        if (card) {
            card.classList.remove("is-completed");
        }
        return;
    }

    if (progressRing) {
        createProgressRingBackground(letter);
    }

    if (card) {
        card.classList.toggle("is-completed", isLetterFullyCompleted(letter));
    }
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
    } catch (error) {
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

function openFullVersionModal() {
    if (fullVersionOverlay) {
        fullVersionOverlay.classList.remove("hidden");
    }
    if (confirmFullVersionButton) {
        confirmFullVersionButton.focus();
    }
}

function closeFullVersionModal() {
    if (fullVersionOverlay) {
        fullVersionOverlay.classList.add("hidden");
    }
}

function ensureLetterAccess(letterData) {
    if (letterData && isLetterUnlocked(letterData.letter)) {
        return true;
    }

    openFullVersionModal();
    return false;
}

function updateSoundToggle() {
    if (!soundToggleButton || !window.AzbukaAudio) {
        return;
    }

    const isEnabled = window.AzbukaAudio.isEnabled();
    soundToggleButton.textContent = isEnabled
        ? currentLanguagePack.interface.soundOn
        : currentLanguagePack.interface.soundOff;
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
    if ((screenId === "letterScreen" || screenId === "gameScreen") && !ensureLetterAccess(selectedLetter)) {
        return;
    }

    if (screenId !== "letterScreen") {
        if (window.AzbukaAudio) {
            window.AzbukaAudio.stopVoice();
        }
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
    gameScreenTitle.textContent = "";
    gameScreenTitle.appendChild(beforePart);
    gameScreenTitle.appendChild(targetPart);
    gameScreenTitle.appendChild(afterPart);
}

function clearImageRetry() {
    clearTimeout(imageRetryTimeout);
    imageRetryTimeout = null;
}

function replaceWordVisual(nextVisual) {
    nextVisual.classList.remove("is-entering", "is-visible", "is-leaving");
    nextVisual.classList.add("imageVisual", "is-entering");
    letterImage.textContent = "";
    letterImage.appendChild(nextVisual);

    requestAnimationFrame(() => {
        nextVisual.classList.add("is-visible");
    });
}

function createLoadingIndicator() {
    const indicator = document.createElement("div");

    indicator.className = "imageLoadingIndicator";
    indicator.setAttribute("role", "status");
    indicator.setAttribute("aria-label", currentLanguagePack.interface.loadingImageLabel);
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
        if (word && word.image) {
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

function displayLetterWord(word) {
    displayedLetterWord = word;
    wordsBlock.textContent = "";

    const wordCard = document.createElement("div");

    wordCard.className = "wordCard";
    wordCard.textContent = word.text;
    wordsBlock.appendChild(wordCard);

    if (isSpecialLetter(selectedLetter.letter)) {
        const wordVisual = document.createElement("div");

        wordVisual.className = "specialLetterWordVisual imageVisual is-visible";
        appendHighlightedSpecialWord(wordVisual, word.text, selectedLetter.letter);
        letterImage.textContent = "";
        letterImage.appendChild(wordVisual);
        currentImagePath = null;
        clearImageRetry();
    } else {
        showWordImage(word);
    }
}

function showNextLetterWord() {
    if (!selectedLetter || !selectedLetter.words.length) {
        return;
    }

    const wordIndex = wordIndexes[selectedLetter.letter];
    const word = selectedLetter.words[wordIndex];

    wordIndexes[selectedLetter.letter] = (wordIndex + 1) % selectedLetter.words.length;
    displayLetterWord(word);
    if (window.AzbukaAudio) {
        window.AzbukaAudio.playWord(word.audio, currentLanguageId);
    }
}

function showLetter(letterData) {
    if (!ensureLetterAccess(letterData)) {
        return;
    }

    selectedLetter = letterData;
    const wordIndex = wordIndexes[selectedLetter.letter];
    const word = selectedLetter.words[wordIndex];

    wordIndexes[selectedLetter.letter] = (wordIndex + 1) % selectedLetter.words.length;
    bigLetter.textContent = selectedLetter.letter;
    letterTitle.textContent = `${currentLanguagePack.interface.letter} ${selectedLetter.letter}`;
    setActiveGameChoice(activeGameMode);
    displayLetterWord(word);
    showScreen("letterScreen");
    if (window.AzbukaAudio) {
        window.AzbukaAudio.playLetter(getLetterFolderName(letterData.letter), currentLanguageId);
    }
}

function isSpecialLetter(letter) {
    return Boolean(currentLanguagePack.textOnlyLetters
        && currentLanguagePack.textOnlyLetters.includes(letter));
}

function createSpecialWordItem(word, specialCharacter) {
    return {
        ...word,
        specialCharacter
    };
}

function createTextOnlyWord(text) {
    return {
        text,
        audio: text.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, "-")
    };
}

function getCorrectSpecialWords(letterData) {
    const configuredPool = currentLanguagePack.containedLetterWordPools
        && currentLanguagePack.containedLetterWordPools[letterData.letter];

    return configuredPool
        ? configuredPool.map((text) => createTextOnlyWord(text))
        : letterData.words;
}

function getOtherSpecialWords(letter) {
    const exclusivePool = currentLanguagePack.exclusiveDistractorWordPools
        && currentLanguagePack.exclusiveDistractorWordPools[letter];

    if (exclusivePool) {
        return exclusivePool.map((text) => createSpecialWordItem(createTextOnlyWord(text), null));
    }

    return alphabet
        .filter((candidate) => isSpecialLetter(candidate.letter) && candidate.letter !== letter)
        .reduce((words, candidate) => words.concat(
            candidate.words.map((word) => createSpecialWordItem(word, candidate.letter))
        ), []);
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

function keepSpecialWordOnOneLine(text) {
    return text.toLowerCase() !== "объявление";
}

function buildSpecialWordSet(letterData, correctCount, wrongCount, previousSets) {
    let nextItems = [];
    let signature = "";
    const previousSignature = previousSets.get(letterData.letter);

    for (let attempt = 0; attempt < 8; attempt += 1) {
        const correctWords = shuffleArray(getCorrectSpecialWords(letterData))
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

function getOrdinaryGameWords(letterData, forDistractors = false) {
    if (currentLanguageId === "ru") {
        return letterData.words;
    }

    // Text-only cards never enter ordinary image pools.
    if (isSpecialLetter(letterData.letter)) {
        return [];
    }

    // Keep native words (such as F/Fox) as correct cards for their own letter.
    if (!forDistractors) {
        return letterData.words;
    }

    const reservedWords = new Set([
        ...Object.values(currentLanguagePack.containedLetterWordPools || {}).flat(),
        ...Object.values(currentLanguagePack.exclusiveDistractorWordPools || {}).flat()
    ]
        .map((text) => text.toLowerCase()));

    return letterData.words.filter((word) => !reservedWords.has(word.text.toLowerCase()));
}

function buildFindObjectRound(letterData) {
    if (isSpecialLetter(letterData.letter)) {
        return buildSpecialWordSet(letterData, 2, 4, lastSpecialFindSets);
    }

    const correctWords = shuffleArray(getOrdinaryGameWords(letterData)).slice(0, 2);
    const otherWords = shuffleArray(getAccessibleAlphabet()
        .filter((candidate) => candidate.letter !== letterData.letter)
        .reduce((words, candidate) => words.concat(getOrdinaryGameWords(candidate, true)), [])
        .map((word) => ({ ...word }))
    ).slice(0, 4);

    return shuffleArray([...correctWords, ...otherWords]);
}

function isCorrectFindObjectWord(word, letterData) {
    const selectedLetter = letterData.letter.toLowerCase();
    // Ignore Spanish vowel accents only when matching; preserve the displayed word.
    const wordText = currentLanguageId === "es-419"
        ? word.text.toLowerCase().normalize("NFC").replace(/[áéíóú]/g, (vowel) =>
            ({ á: "a", é: "e", í: "i", ó: "o", ú: "u" })[vowel])
        : word.text.toLowerCase();

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
    addClass(findObjectCards, "hidden");
    addClass(connectLineBoard, "hidden");
    addClass(sorterBoard, "hidden");
    addClass(busBoard, "hidden");
    addClass(balloons, "hidden");
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
    if (!ensureLetterAccess(letterData)) {
        return;
    }

    activeGameMode = "findObjects";
    setActiveGameChoice("findObjects");
    selectedLetter = letterData;
    findObjectRoundItems = buildFindObjectRound(letterData);
    preloadWordImages(findObjectRoundItems);
    findObjectCorrectFound = 0;
    findObjectRoundCompleted = false;
    document.querySelector(".gameTitle").textContent = "";
    repeatRoundButton.textContent = currentLanguagePack.interface.newCards;
    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();

    if (currentLanguageId === "es-419" && isSpecialLetter(letterData.letter)) {
        setGameScreenTitle("Encuentra dos palabras que contienen la letra ", letterData.letter);
    } else if (currentLanguageId === "es-419") {
        setGameScreenTitle("Encuentra dos palabras que empiezan con la letra ", letterData.letter);
    } else if (currentLanguageId === "en-US" && isSpecialLetter(letterData.letter)) {
        setGameScreenTitle("Find two words containing the letter ", letterData.letter);
    } else if (currentLanguageId === "en-US") {
        setGameScreenTitle("Find two words beginning with ", letterData.letter);
    } else if (letterData.letter === "Ъ") {
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

    addClass(connectLineBoard, "hidden");
    addClass(sorterBoard, "hidden");
    addClass(busBoard, "hidden");

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
            card.classList.add("specialWordCard", "specialTextFitCard");
            label.classList.add("specialTextFitLabel");
            label.classList.toggle("specialTextSingleLine", keepSpecialWordOnOneLine(item.text));
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
        if (findObjectCards) {
            findObjectCards.appendChild(card);
        }
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
    removeClass(sorterLetter, "is-dragging");

    if (sorterLetter) {
        sorterLetter.style.transform = "";
    }
}

function findSorterTargetAtPoint(clientX, clientY) {
    return [...sorterShadows.querySelectorAll(".sorterShadow")].find((shadow) => {
        const rect = shadow.getBoundingClientRect();

        return clientX >= rect.left && clientX <= rect.right
            && clientY >= rect.top && clientY <= rect.bottom;
    }) || null;
}

function completeSorterGame(targetShadow) {
    if (sorterRoundCompleted || !selectedLetter) {
        return;
    }

    sorterRoundCompleted = true;
    resetSorterLetterPosition();
    addClass(sorterLetter, "is-complete");
    targetShadow.classList.add("is-matched");
    recordMiniGameProgress(selectedLetter.letter, "game3");
    repeatRoundButton.textContent = currentLanguagePack.interface.repeat;
    repeatRoundButton.classList.remove("hidden");
    removeClass(backToLettersButton, "hidden");
    playAudioEffect("win");
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
            playAudioEffect("correct");
            resetSorterLetterPosition();
        }

        return;
    }

    targetShadow.classList.add("is-wrong");
    playAudioEffect("wrong");
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
    if (sorterLetter.setPointerCapture) {
        sorterLetter.setPointerCapture(event.pointerId);
    }
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

    if (sorterLetter.releasePointerCapture) {
        sorterLetter.releasePointerCapture(event.pointerId);
    }

    if (sorterDrag.hasMoved && targetShadow && targetShadow.dataset.correct === "true") {
        handleSorterTargetChoice(targetShadow);
        return;
    }

    if (sorterDrag.hasMoved && targetShadow) {
        targetShadow.classList.add("is-wrong");
        playAudioEffect("wrong");
        setTimeout(() => targetShadow.classList.remove("is-wrong"), 620);
    }

    resetSorterLetterPosition();
}

function showSorterRound(letterData) {
    if (!ensureLetterAccess(letterData)) {
        return;
    }

    activeGameMode = "sorter";
    setActiveGameChoice("sorter");
    selectedLetter = letterData;
    sorterRoundCompleted = false;
    sorterCorrectFound = 0;
    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();
    cancelActiveConnection();
    hideGameBoards();
    if (sorterBoard) {
        sorterBoard.classList.remove("hidden");
    }
    if (sorterTopShadows) {
        sorterTopShadows.textContent = "";
    }
    if (sorterBottomShadows) {
        sorterBottomShadows.textContent = "";
    }
    sorterLetter.textContent = letterData.letter;
    sorterLetter.setAttribute("aria-label", `${currentLanguagePack.interface.letter} ${letterData.letter}`);
    sorterLetter.classList.remove("is-complete");
    resetSorterLetterPosition();
    if (currentLanguageId === "es-419") {
        setGameScreenTitle("Arrastra la letra ", letterData.letter, " hasta su sombra");
    } else if (currentLanguageId === "en-US") {
        setGameScreenTitle("Drag the letter ", letterData.letter, " to its shadow");
    } else if (letterData.letter === "Ъ") {
        setGameScreenTitle("Перетащи ", "твёрдый знак", " к его тени");
    } else if (letterData.letter === "Ь") {
        setGameScreenTitle("Перетащи ", "мягкий знак", " к его тени");
    } else {
        setGameScreenTitle("Перетащи букву ", letterData.letter, " к её тени");
    }
    document.querySelector(".gameTitle").textContent = "";
    repeatRoundButton.textContent = currentLanguagePack.interface.newShadows;
    repeatRoundButton.classList.remove("hidden");
    addClass(backToLettersButton, "hidden");
    resetCelebrationOverlay();

    buildSorterRound(letterData).forEach((letter, index) => {
        const shadow = document.createElement("button");

        shadow.type = "button";
        shadow.className = "sorterShadow";
        shadow.textContent = letter;
        shadow.dataset.correct = String(letter === letterData.letter);
        shadow.setAttribute("aria-label", `${currentLanguagePack.interface.shadowLetter} ${letter}`);
        const shadowRow = index < 4 ? sorterTopShadows : sorterBottomShadows;

        if (shadowRow) {
            shadowRow.appendChild(shadow);
        }
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
        : shuffleArray(getOrdinaryGameWords(letterData)).slice(0, 2);
    const correctItems = correctSource.map((word, index) => ({
        id: `correct-${index}`,
        word,
        isCorrect: true,
        specialCharacter: usesSpecialWords ? letterData.letter : null
    }));
    const wrongWordPool = usesSpecialWords
        ? sourceItems.filter((item) => item.specialCharacter !== letterData.letter)
        : getAccessibleAlphabet()
            .filter((item) => item.letter !== letterData.letter)
            .reduce((words, item) => words.concat(getOrdinaryGameWords(item, true)), []);
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
    if (connectCenterLetter.releasePointerCapture) {
        connectCenterLetter.releasePointerCapture(connectCenterLetter.activePointerId);
    }
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
    repeatRoundButton.textContent = currentLanguagePack.interface.repeat;
    repeatRoundButton.classList.remove("hidden");
    removeClass(backToLettersButton, "hidden");
    playAudioEffect("win");
    showCelebrationPhrase(getCelebrationPhrase());
}

function finishConnection(event) {
    if (!activeConnection) {
        return;
    }

    const pointedElement = document.elementFromPoint(event.clientX, event.clientY);
    const imageButton = pointedElement ? pointedElement.closest(".connectImageCard") : null;
    const { line } = activeConnection;

    if (imageButton && imageButton.dataset.correct === "true" && !imageButton.classList.contains("is-matched")) {
        activeConnection = null;
        if (connectCenterLetter.releasePointerCapture) {
            connectCenterLetter.releasePointerCapture(connectCenterLetter.activePointerId);
        }
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
            playAudioEffect("correct");
        }

        return;
    }

    playAudioEffect("wrong");
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
    if (connectCenterLetter.setPointerCapture) {
        connectCenterLetter.setPointerCapture(event.pointerId);
    }
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
    if (!ensureLetterAccess(letterData)) {
        return;
    }

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

    if (currentLanguageId === "es-419" && isSpecialLetter(letterData.letter)) {
        setGameScreenTitle("Une la letra ", letterData.letter, ` con dos palabras que contienen la letra ${letterData.letter}`);
        connectLineBoard.setAttribute("aria-label", `Une la letra ${letterData.letter} con dos palabras que contienen la letra ${letterData.letter}`);
    } else if (currentLanguageId === "es-419") {
        setGameScreenTitle("Une la letra ", letterData.letter, " con las dos imágenes cuyos nombres empiezan con esa letra");
        connectLineBoard.setAttribute("aria-label", `Une la letra ${letterData.letter} con las dos imágenes cuyos nombres empiezan con esa letra`);
    } else if (currentLanguageId === "en-US" && isSpecialLetter(letterData.letter)) {
        setGameScreenTitle("Connect the letter ", letterData.letter, " to two words containing X");
        connectLineBoard.setAttribute("aria-label", "Connect the letter X to two words containing X");
    } else if (currentLanguageId === "en-US") {
        setGameScreenTitle("Connect the letter ", letterData.letter, " to two matching pictures");
        connectLineBoard.setAttribute("aria-label", `Connect the letter ${letterData.letter} to two matching pictures`);
    } else if (letterData.letter === "Ъ") {
        setGameScreenTitle("Соедини ", "твёрдый знак", " с двумя словами, в которых есть твёрдый знак");
        connectLineBoard.setAttribute("aria-label", "Соедини твёрдый знак с двумя словами, в которых есть твёрдый знак");
    } else if (letterData.letter === "Ь") {
        setGameScreenTitle("Соедини ", "мягкий знак", " с двумя словами, в которых есть мягкий знак");
        connectLineBoard.setAttribute("aria-label", "Соедини мягкий знак с двумя словами, в которых есть мягкий знак");
    } else if (letterData.letter === "Ы") {
        setGameScreenTitle("Соедини букву ", "Ы", " с двумя словами, в которых есть буква Ы");
        connectLineBoard.setAttribute("aria-label", "Соедини букву Ы с двумя словами, в которых есть буква Ы");
    } else {
        setGameScreenTitle("Соедини букву ", letterData.letter, " с двумя подходящими картинками");
        connectLineBoard.setAttribute("aria-label", `Соедини букву ${letterData.letter} с двумя подходящими картинками`);
    }

    document.querySelector(".gameTitle").textContent = "";
    addClass(findObjectCards, "hidden");
    addClass(sorterBoard, "hidden");
    addClass(busBoard, "hidden");
    removeClass(connectLineBoard, "hidden");
    connectLeftImages.textContent = "";
    connectRightImages.textContent = "";
    connectLines.textContent = "";
    connectCenterLetter.textContent = letterData.letter;
    connectCenterLetter.setAttribute("aria-label", `${currentLanguagePack.interface.letter} ${letterData.letter}`);
    repeatRoundButton.textContent = currentLanguagePack.interface.newCards;
    repeatRoundButton.classList.remove("hidden");
    addClass(backToLettersButton, "hidden");
    addClass(balloons, "hidden");

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

            button.classList.add("specialWordCard", "specialTextFitCard");
            label.className = "connectWordLabel specialTextFitLabel";
            label.classList.toggle("specialTextSingleLine", keepSpecialWordOnOneLine(item.word.text));
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
    const sourceWords = getOrdinaryGameWords(letterData);
    const availableWords = sourceWords.filter((word) => word.text !== previousWord);
    const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    const nextWord = randomWord !== undefined ? randomWord : sourceWords[0];

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
    const wrongWords = shuffleArray(getAccessibleAlphabet()
        .filter((candidate) => candidate.letter !== letterData.letter)
        .reduce((words, candidate) => words.concat(getOrdinaryGameWords(candidate, true)), [])
    ).slice(0, 2);

    return shuffleArray([
        { word: correctWord, isCorrect: true },
        ...wrongWords.map((word) => ({ word, isCorrect: false }))
    ]);
}

function createBusRouteStates(options, routes) {
    const svgNamespace = "http://www.w3.org/2000/svg";

    busRoadSvg.textContent = "";
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
    busDestinations.textContent = "";

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

    const activeRoute = busRouteStates[
        busSelectedRouteIndex !== null && busSelectedRouteIndex !== undefined
            ? busSelectedRouteIndex
            : 0
    ];

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

function updateLetterAccessUI() {
    alphabet.forEach((letterData) => {
        const card = letterCards.get(letterData.letter);
        const wrapper = card ? card.parentElement : null;
        const isUnlocked = isLetterUnlocked(letterData.letter);

        if (!card || !wrapper) {
            return;
        }

        card.classList.toggle("is-locked", !isUnlocked);
        wrapper.classList.toggle("is-locked", !isUnlocked);

        let lock = wrapper.querySelector(".letterLock");
        if (!isUnlocked && !lock) {
            lock = document.createElement("span");
            lock.className = "letterLock";
            lock.textContent = "🔒";
            lock.setAttribute("aria-hidden", "true");
            wrapper.appendChild(lock);
        } else if (isUnlocked && lock) {
            lock.remove();
        }

        if (isUnlocked) {
            card.setAttribute("aria-label", letterData.letter);
        } else {
            card.setAttribute("aria-label", `${letterData.letter}, ${currentLanguagePack.interface.lockedLetter}`);
        }
        updateLetterCardProgress(letterData.letter);
    });
}

function applyBillingState(state) {
    if (!androidBilling || !state) {
        return;
    }

    androidFullAccess = state.fullAccess === true;
    updateLetterAccessUI();

    if (androidFullAccess) {
        closeFullVersionModal();
        return;
    }

    if (!fullVersionText) {
        return;
    }
    if (state.status === "pending") {
        fullVersionText.textContent = currentLanguagePack.interface.purchasePending;
    } else if (state.status === "canceled") {
        fullVersionText.textContent = currentLanguagePack.interface.purchaseCanceled;
    } else if (["error", "unavailable", "disconnected", "acknowledgement_error"].includes(state.status)) {
        fullVersionText.textContent = currentLanguagePack.interface.playUnavailable;
    }
}

async function initializeAndroidBilling() {
    if (!androidBilling) {
        return;
    }

    try {
        await androidBilling.addListener("entitlementChanged", applyBillingState);
        applyBillingState(await androidBilling.getEntitlement());
    } catch (error) {
        applyBillingState({ fullAccess: false, status: "unavailable" });
    }
}

async function purchaseFullAccess() {
    if (!androidBilling) {
        closeFullVersionModal();
        return;
    }

    confirmFullVersionButton.disabled = true;
    if (fullVersionText) {
        fullVersionText.textContent = currentLanguagePack.interface.openingPlay;
    }

    try {
        await androidBilling.purchaseFullAccess();
    } catch (error) {
        if (fullVersionText) {
            fullVersionText.textContent = error && error.message
                ? error.message
                : currentLanguagePack.interface.purchaseUnavailable;
        }
    } finally {
        confirmFullVersionButton.disabled = false;
    }
}

function getNextBusProgress(candidateProgress) {
    return candidateProgress <= 0.025 ? 0 : candidateProgress;
}

function getBusRouteFromStartDelta(deltaX, deltaY) {
    const minimumMovement = 24;

    if (Math.hypot(deltaX, deltaY) < minimumMovement) {
        return null;
    }

    const horizontalMovement = Math.abs(deltaX);
    const verticalMovement = Math.abs(deltaY);

    if (verticalMovement >= horizontalMovement * 0.75) {
        return deltaY < 0 ? 0 : 2;
    }

    if (deltaX > 0 && horizontalMovement >= verticalMovement * 1.35) {
        return 1;
    }

    return null;
}

function moveBusToPointer(event) {
    if (busRoundCompleted || busRouteStates.length === 0) {
        return;
    }

    const pointer = getBusPointerPoint(event);
    const canChooseRoute = busSelectedRouteIndex === null;

    if (canChooseRoute) {
        const routeIndex = getBusRouteFromStartDelta(
            event.clientX - busDrive.branchStartClientX,
            event.clientY - busDrive.branchStartClientY
        );

        if (routeIndex === null) {
            return;
        }

        busSelectedRouteIndex = routeIndex;
    }

    const selectedRoute = busRouteStates[busSelectedRouteIndex];
    const { nearestSample, nearestDistance } = getNearestBusRoute(pointer, [selectedRoute]);

    if (!nearestSample
        || nearestDistance > 105) {
        return;
    }

    const hadLeftStart = busRouteStarted;
    busProgress = getNextBusProgress(nearestSample.progress);

    if (busProgress > 0) {
        busRouteStarted = true;
    } else if (hadLeftStart) {
        busSelectedRouteIndex = null;
        busRouteStarted = false;
        busDrive.branchStartClientX = event.clientX;
        busDrive.branchStartClientY = event.clientY;
    }

    layoutBusRound();
}

function beginBusDrive(event) {
    if (busRoundCompleted) {
        return;
    }

    event.preventDefault();
    busDrive = {
        pointerId: event.pointerId,
        branchStartClientX: event.clientX,
        branchStartClientY: event.clientY
    };
    if (busVehicle.setPointerCapture) {
        busVehicle.setPointerCapture(event.pointerId);
    }
    busVehicle.classList.add("is-driving");
}

function continueBusDrive(event) {
    if (!busDrive || event.pointerId !== busDrive.pointerId) {
        return;
    }

    moveBusToPointer(event);
}

function finishBusDrive(event) {
    if (!busDrive || event.pointerId !== busDrive.pointerId) {
        return;
    }

    if (busVehicle.releasePointerCapture) {
        busVehicle.releasePointerCapture(event.pointerId);
    }
    busDrive = null;
    busVehicle.classList.remove("is-driving");

    if (busProgress === 0) {
        busSelectedRouteIndex = null;
        busRouteStarted = false;
    }

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

    if (busVehicle.releasePointerCapture) {
        busVehicle.releasePointerCapture(event.pointerId);
    }
    busVehicle.classList.remove("is-driving");
    resetBusVehicle();
}

function resetBusVehicle() {
    busDrive = null;
    busProgress = 0;
    busSelectedRouteIndex = null;
    busRouteStarted = false;
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
    playAudioEffect("wrong");
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
    repeatRoundButton.textContent = currentLanguagePack.interface.repeat;
    repeatRoundButton.classList.remove("hidden");
    removeClass(backToLettersButton, "hidden");
    playAudioEffect("win");
    showCelebrationPhrase(getCelebrationPhrase());
}

function showBusRound(letterData) {
    if (!ensureLetterAccess(letterData)) {
        return;
    }

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
    busRouteStarted = false;
    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();
    cancelActiveConnection();
    resetSorterLetterPosition();
    hideGameBoards();
    busBoard.classList.remove("hidden");
    busVehicle.classList.remove("is-arrived", "is-driving", "needs-more-road", "is-returning");
    createBusRouteStates(options, routes);
    createBusDestinations();

    if (currentLanguageId === "es-419" && isSpecialLetter(letterData.letter)) {
        setGameScreenTitle("Conduce el autobús hasta una palabra que contiene la letra ", letterData.letter);
    } else if (currentLanguageId === "es-419") {
        setGameScreenTitle("Conduce el autobús hasta una palabra que empieza con la letra ", letterData.letter);
    } else if (currentLanguageId === "en-US" && isSpecialLetter(letterData.letter)) {
        setGameScreenTitle("Drive the bus to a word containing the letter ", letterData.letter);
    } else if (currentLanguageId === "en-US") {
        setGameScreenTitle("Drive the bus to a word beginning with ", letterData.letter);
    } else if (letterData.letter === "Ъ") {
        setGameScreenTitle("Проведи автобус к слову, в котором есть ", "твёрдый знак");
    } else if (letterData.letter === "Ь") {
        setGameScreenTitle("Проведи автобус к слову, в котором есть ", "мягкий знак");
    } else if (letterData.letter === "Ы") {
        setGameScreenTitle("Проведи автобус к слову, в котором есть буква ", "Ы");
    } else {
        setGameScreenTitle("Проведи автобус к слову на букву ", letterData.letter);
    }

    document.querySelector(".gameTitle").textContent = "";
    repeatRoundButton.textContent = currentLanguagePack.interface.newRoad;
    repeatRoundButton.classList.remove("hidden");
    addClass(backToLettersButton, "hidden");
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
            playAudioEffect("correct");
        }

        return;
    }

    card.classList.add("is-wrong");
    playAudioEffect("wrong");
    setTimeout(() => card.classList.remove("is-wrong"), 620);
}

function completeFindObjectGame() {
    playAudioEffect("win");

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
        repeatRoundButton.textContent = currentLanguagePack.interface.repeat;
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
    const randomPhrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
    const phrase = randomPhrase !== undefined ? randomPhrase : celebrationPhrases[0];

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
    playAudioEffect("win");
    recordMiniGameCompletion(selectedLetter.letter);
    stopBalloonAnimation();
    balloons.innerHTML = "";
    repeatRoundButton.textContent = currentLanguagePack.interface.repeat;
    repeatRoundButton.classList.remove("hidden");
    removeClass(backToLettersButton, "hidden");
    showCelebrationPhrase(getCelebrationPhrase());
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
            playAudioEffect("correct");
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
    playAudioEffect("wrong");
    setTimeout(() => {
        balloon.style.transform = "";
    }, 200);
}

function showBalloonGame(letterData) {
    if (!ensureLetterAccess(letterData)) {
        return;
    }

    activeGameMode = "balloons";
    setActiveGameChoice("balloons");
    selectedLetter = letterData;
    cancelActiveConnection();
    addClass(findObjectCards, "hidden");
    addClass(connectLineBoard, "hidden");
    addClass(sorterBoard, "hidden");
    addClass(busBoard, "hidden");
    removeClass(balloons, "hidden");
    addClass(repeatRoundButton, "hidden");
    addClass(backToLettersButton, "hidden");
    if (currentLanguageId === "es-419") {
        setGameScreenTitle("Revienta tres globos con la letra ", letterData.letter);
    } else if (currentLanguageId === "en-US") {
        setGameScreenTitle("Pop three balloons with the letter ", letterData.letter);
    } else if (letterData.letter === "Ъ") {
        setGameScreenTitle("Лопни три шарика с ", "твёрдым знаком");
    } else if (letterData.letter === "Ь") {
        setGameScreenTitle("Лопни три шарика с ", "мягким знаком");
    } else {
        setGameScreenTitle("Лопни три шарика с буквой ", letterData.letter);
    }
    document.querySelector(".gameTitle").textContent = "";
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
        const mobilePosition = mobilePositions ? mobilePositions[index] : null;
        const left = mobilePosition && mobilePosition.left !== undefined
            ? mobilePosition.left
            : Math.random() * maxLeft;
        const top = mobilePosition && mobilePosition.top !== undefined
            ? mobilePosition.top
            : Math.random() * maxTop;
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

function renderLettersGrid() {
    lettersGrid.textContent = "";
    letterCards.clear();
    letterProgressRings.clear();

    alphabet.forEach((letterData) => {
    const wrapper = document.createElement("div");
    const ring = document.createElement("div");
    const card = document.createElement("div");
    const isUnlocked = isLetterUnlocked(letterData.letter);

    wrapper.className = "letterCardWrapper";
    ring.className = "letterProgressRing";
    card.className = "letterCard";
    card.textContent = letterData.letter;

    if (!isUnlocked) {
        const lock = document.createElement("span");

        wrapper.classList.add("is-locked");
        card.classList.add("is-locked");
        card.setAttribute("aria-label", `${letterData.letter}, ${currentLanguagePack.interface.lockedLetter}`);
        lock.className = "letterLock";
        lock.textContent = "🔒";
        lock.setAttribute("aria-hidden", "true");
        wrapper.appendChild(lock);
    }

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
        playAudioEffect("click");

        if (!ensureLetterAccess(letterData)) {
            return;
        }

        if (!isSpecialLetter(letterData.letter)) {
            preloadWordImages(letterData.words);
        }

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
}

renderLettersGrid();
applyInterfaceLanguage();

if (demoNotice) {
    demoNotice.classList.toggle("hidden", Boolean(androidBilling) || !isDemoMode());
}
updateProgressUI();
updateSoundToggle();
initializeAndroidBilling();

if (letterImage) {
    letterImage.addEventListener("click", () => {
        if (window.AzbukaAudio) {
            window.AzbukaAudio.playWord(displayedLetterWord ? displayedLetterWord.audio : null, currentLanguageId);
        }
    });
}

if (wordsBlock) {
    wordsBlock.addEventListener("click", () => {
        if (window.AzbukaAudio) {
            window.AzbukaAudio.playWord(displayedLetterWord ? displayedLetterWord.audio : null, currentLanguageId);
        }
    });
}

if (bigLetter) {
    bigLetter.addEventListener("click", () => {
        if (window.AzbukaAudio && selectedLetter) {
            window.AzbukaAudio.playLetter(getLetterFolderName(selectedLetter.letter), currentLanguageId);
        }
    });
}

if (nextWordButton) {
    nextWordButton.addEventListener("click", () => {
        playAudioEffect("click");
        showNextLetterWord();
    });
}

document.getElementById("startButton").addEventListener("click", () => {
    if (window.AzbukaAudio) {
        window.AzbukaAudio.prepare();
    }
    playAudioEffect("celebration");
    showScreen("lettersScreen");
});

let deferredInstallPrompt = null;

function isInstalledApp() {
    return window.matchMedia("(display-mode: standalone)").matches
        || window.navigator.standalone === true;
}

function hideInstallButton() {
    addClass(installButton, "hidden");
}

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();

    if (isInstalledApp()) {
        return;
    }

    deferredInstallPrompt = event;
    removeClass(installButton, "hidden");
});

if (installButton) {
    installButton.addEventListener("click", async () => {
        if (!deferredInstallPrompt || isInstalledApp()) {
            hideInstallButton();
            return;
        }

        const promptEvent = deferredInstallPrompt;
        deferredInstallPrompt = null;
        hideInstallButton();

        try {
            await promptEvent.prompt();
            await promptEvent.userChoice;
        } catch (error) {
            console.warn("Не удалось открыть установку приложения:", error);
        }
    });
}

window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    hideInstallButton();
});

if ("serviceWorker" in navigator) {
    const isLocalDevelopment = window.location.hostname === "127.0.0.1"
        || window.location.hostname === "localhost";

    if (isLocalDevelopment) {
        const cleanupReloadKey = "azbukaLocalServiceWorkerCleanup";

        (async () => {
            const wasControlled = Boolean(navigator.serviceWorker.controller);
            const registrations = await navigator.serviceWorker.getRegistrations();
            const cacheNames = await caches.keys();

            await Promise.all([
                ...registrations.map((registration) => registration.unregister()),
                ...cacheNames
                    .filter((cacheName) => cacheName.startsWith("azbuka-"))
                    .map((cacheName) => caches.delete(cacheName))
            ]);

            if (wasControlled && sessionStorage.getItem(cleanupReloadKey) !== "done") {
                sessionStorage.setItem(cleanupReloadKey, "done");
                window.location.reload();
                return;
            }

            sessionStorage.removeItem(cleanupReloadKey);
        })().catch((error) => {
            console.warn("Не удалось очистить локальный service worker:", error);
        });
    } else {
        window.addEventListener("load", () => {
            (async () => {
                let registration;

                try {
                    registration = await navigator.serviceWorker.register("./service-worker.js", {
                        updateViaCache: "none"
                    });
                } catch (error) {
                    if (!(error instanceof TypeError)) {
                        throw error;
                    }

                    registration = await navigator.serviceWorker.register("./service-worker.js");
                }

                await registration.update();
            })().catch((error) => {
                console.warn("Не удалось зарегистрировать service worker:", error);
            });
        });
    }
}

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
        if (window.AzbukaAudio) {
            window.AzbukaAudio.setEnabled(!window.AzbukaAudio.isEnabled());
        }
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

if (closeFullVersionButton) {
    closeFullVersionButton.addEventListener("click", closeFullVersionModal);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playAudioEffect("click");
        switchLanguage(button.dataset.language);
        closeSettingsModal();
    });
});
if (confirmFullVersionButton) {
    confirmFullVersionButton.addEventListener("click", purchaseFullAccess);
}
if (fullVersionOverlay) {
    fullVersionOverlay.addEventListener("click", (event) => {
        if (event.target === fullVersionOverlay) {
            closeFullVersionModal();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape"
        && fullVersionOverlay
        && !fullVersionOverlay.classList.contains("hidden")) {
        closeFullVersionModal();
    }
});

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
    playAudioEffect("click");
    showFindObjectRound(selectedLetter);
    playGameInstruction(selectedLetter, 2);
});

if (playBalloonsGameButton) {
    playBalloonsGameButton.addEventListener("click", () => {
        playAudioEffect("click");
        showBalloonGame(selectedLetter);
        playGameInstruction(selectedLetter, 1);
    });
}

if (playSorterGameButton) {
    playSorterGameButton.addEventListener("click", () => {
        playAudioEffect("click");
        showSorterRound(selectedLetter);
        playGameInstruction(selectedLetter, 3);
    });
}

if (playConnectGameButton) {
    playConnectGameButton.addEventListener("click", () => {
        playAudioEffect("click");
        showConnectLineRound(selectedLetter);
        playGameInstruction(selectedLetter, 4);
    });
}

if (playBusGameButton) {
    playBusGameButton.addEventListener("click", () => {
        playAudioEffect("click");
        showBusRound(selectedLetter);
        playGameInstruction(selectedLetter, 5);
    });
}

if (repeatRoundButton) {
    repeatRoundButton.addEventListener("click", () => {
        playAudioEffect("click");
        if (activeGameMode === "connectLines") {
            showConnectLineRound(selectedLetter);
        } else if (activeGameMode === "sorter") {
            showSorterRound(selectedLetter);
        } else if (activeGameMode === "bus") {
            showBusRound(selectedLetter);
        } else if (activeGameMode === "balloons") {
            showBalloonGame(selectedLetter);
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
    if (ensureLetterAccess(selectedLetter)) {
        showScreen("letterScreen");
    }
});

window.addEventListener("resize", () => {
    redrawConnectLines();
    layoutBusRound();
});

showScreen("homeScreen");
