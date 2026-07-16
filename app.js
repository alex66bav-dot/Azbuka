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
        Сыр: "cheese.png",
        Мышь: "mouse.png",
        Рыба: "fish.png",
        Дым: "smoke.png",
        Тыква: "Тыква.png"
    },
    Ь: {
        Семья: "family.png",
        Конь: "horse.png",
        Пальто: "coat.png",
        Мальчик: "boy.png",
        Медведь: "bear.png"
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

function getLetterFolderName(letter) {
    const normalizedLetter = letter.toLowerCase();

    return transliteration[normalizedLetter] ?? normalizedLetter;
}

function createWord(letter, text) {
    const customImages = customWordImages[letter];
    const imageName = customImages?.[text]
        ?? `${text
            .toLowerCase()
            .split("")
            .map((character) => wordTransliteration[character] ?? character)
            .join("")
            .replace(/\s+/g, "-")}.png`;

    return {
        text,
        image: `assets/images/letters/${getLetterFolderName(letter)}/${imageName}`
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
    { letter: "Ы", words: createWords("Ы", ["Сыр", "Мышь", "Рыба", "Дым", "Тыква"]) },
    { letter: "Ь", words: createWords("Ь", ["Семья", "Конь", "Пальто", "Мальчик", "Медведь"]) },
    { letter: "Э", words: createWords("Э", ["Эскимо", "Экран", "Экскаватор", "Эхо", "Этажерка"]) },
    { letter: "Ю", words: createWords("Ю", ["Юла", "Юбка", "Юрта", "Юнга", "Юмор"]) },
    { letter: "Я", words: createWords("Я", ["Яблоко", "Ягода", "Якорь", "Ящерица", "Яйцо"]) }
];

let selectedLetter = null;
const wordIndexes = Object.fromEntries(alphabet.map((letterData) => [letterData.letter, 0]));

const lettersGrid = document.getElementById("lettersGrid");
const bigLetter = document.getElementById("bigLetter");
const letterImage = document.getElementById("letterImage");
const wordsBlock = document.getElementById("wordsBlock");
const targetLetter = document.getElementById("targetLetter");
const balloons = document.getElementById("balloons");
const screens = document.querySelectorAll(".screen");
const balloonColors = ["#ff6b6b", "#4dabf7", "#51cf66", "#ff922b", "#9775fa"];
const celebrationPhrases = ["Молодец!", "Здорово!", "Отлично!", "Супер!", "Умница!"];
const balloonSize = 90;
let correctBalloonsLeft = 0;
let nextRoundTimeout = null;
let animationFrameId = null;
let lastAnimationTime = null;
let movingBalloons = [];
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
const completedLetters = new Set(loadCompletedLetters());
const letterCards = new Map();

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

function updateLetterCardProgress(letter) {
    letterCards.get(letter)?.classList.toggle("is-completed", completedLetters.has(letter));
}

function markLetterCompleted(letter) {
    completedLetters.add(letter);
    updateLetterCardProgress(letter);

    try {
        localStorage.setItem(completedLettersStorageKey, JSON.stringify([...completedLetters]));
    } catch {
        // Progress still remains available until the page is reloaded.
    }
}

function showScreen(screenId) {
    screens.forEach((screen) => {
        screen.classList.toggle("active", screen.id === screenId);
    });
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
            imageCache.set(imagePath, image);
            imageRequests.delete(imagePath);
            resolve(image);
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

    wordIndexes[selectedLetter.letter] = (wordIndex + 1) % selectedLetter.words.length;
    bigLetter.textContent = selectedLetter.letter;
    wordsBlock.innerHTML = `<div class="wordCard">${word.text}</div>`;
    showWordImage(word);
    showScreen("letterScreen");
}

function getRandomWrongLetter() {
    const wrongLetters = alphabet.filter((letterData) => letterData.letter !== selectedLetter.letter);
    const randomIndex = Math.floor(Math.random() * wrongLetters.length);

    return wrongLetters[randomIndex].letter;
}

function stopBalloonAnimation() {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = null;
    lastAnimationTime = null;
    movingBalloons = [];
}

function moveBalloons(currentTime) {
    if (lastAnimationTime === null) {
        lastAnimationTime = currentTime;
    }

    const timePassed = Math.min((currentTime - lastAnimationTime) / 1000, 0.05);
    const maxLeft = Math.max(0, balloons.clientWidth - balloonSize);
    const maxTop = Math.max(0, balloons.clientHeight - balloonSize);

    movingBalloons.forEach((balloonData) => {
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
    const centerLeft = parseFloat(balloon.style.left) + balloonSize / 2;
    const centerTop = parseFloat(balloon.style.top) + balloonSize / 2;
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
    markLetterCompleted(selectedLetter.letter);
    stopBalloonAnimation();
    balloons.innerHTML = "";

    const celebration = document.createElement("div");
    const phraseIndex = Math.floor(Math.random() * celebrationPhrases.length);

    celebration.textContent = celebrationPhrases[phraseIndex];
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
    setTimeout(() => {
        balloon.style.transform = "";
    }, 200);
}

function createGameRound() {
    if (!selectedLetter) {
        return;
    }

    clearTimeout(nextRoundTimeout);
    stopBalloonAnimation();
    balloons.innerHTML = "";
    targetLetter.textContent = selectedLetter.letter;
    correctBalloonsLeft = 3;

    const roundLetters = [
        selectedLetter.letter,
        selectedLetter.letter,
        selectedLetter.letter,
        ...Array.from({ length: 7 }, getRandomWrongLetter)
    ].sort(() => Math.random() - 0.5);

    const maxLeft = Math.max(0, balloons.clientWidth - balloonSize);
    const maxTop = Math.max(0, balloons.clientHeight - balloonSize);

    roundLetters.forEach((letter, index) => {
        const balloon = document.createElement("button");
        balloon.className = "balloon";
        balloon.type = "button";
        balloon.textContent = letter;
        balloon.style.background = balloonColors[index % balloonColors.length];
        const left = Math.random() * maxLeft;
        const top = Math.random() * maxTop;
        const direction = Math.random() * Math.PI * 2;
        const speed = 15 + Math.random() * 15;

        balloon.style.left = `${left}px`;
        balloon.style.top = `${top}px`;
        balloon.addEventListener("click", () => handleBalloonClick(balloon, letter));
        balloons.appendChild(balloon);
        movingBalloons.push({
            element: balloon,
            left,
            top,
            speedX: Math.cos(direction) * speed,
            speedY: Math.sin(direction) * speed
        });
    });

    startBalloonAnimation();
}

alphabet.forEach((letterData) => {
    const card = document.createElement("div");

    card.className = "letterCard";
    card.textContent = letterData.letter;
    letterCards.set(letterData.letter, card);
    updateLetterCardProgress(letterData.letter);
    card.addEventListener("click", () => {
        if (letterSelectionTimeout !== null) {
            return;
        }

        letterSelectionTimeout = setTimeout(() => {
            letterSelectionTimeout = null;
            showLetter(letterData);
        }, letterSelectionDelay);
    });
    lettersGrid.appendChild(card);
});

document.getElementById("startButton").addEventListener("click", () => {
    showScreen("lettersScreen");
});

document.getElementById("backHomeButton").addEventListener("click", () => {
    showScreen("homeScreen");
});

document.getElementById("backLettersButton").addEventListener("click", () => {
    showScreen("lettersScreen");
});

document.getElementById("playGameButton").addEventListener("click", () => {
    showScreen("gameScreen");
    createGameRound();
});

document.getElementById("backLetterButton").addEventListener("click", () => {
    showScreen("letterScreen");
});

showScreen("homeScreen");
