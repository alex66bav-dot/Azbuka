const alphabet = [
    { letter: "А", words: ["Арбуз", "Аист", "Апельсин", "Автобус", "Акула"] },
    { letter: "Б", words: ["Бабочка", "Банан", "Белка", "Барабан", "Бегемот"] },
    { letter: "В", words: ["Велосипед", "Вишня", "Волк", "Ворона", "Ведро"] },
    { letter: "Г", words: ["Груша", "Гриб", "Гусеница", "Гитара", "Голубь"] },
    { letter: "Д", words: ["Дом", "Дерево", "Дельфин", "Дорога", "Дракон"] },
    { letter: "Е", words: ["Енот", "Ежевика", "Ель", "Ехидна", "Еда"] },
    { letter: "Ё", words: ["Ёж", "Ёлка", "Ёрш", "Ёжик", "Ёлочная игрушка"] },
    { letter: "Ж", words: ["Жираф", "Жук", "Жаба", "Журавль", "Жёлудь"] },
    { letter: "З", words: ["Заяц", "Зебра", "Зонт", "Звезда", "Земляника"] },
    { letter: "И", words: ["Игрушка", "Индюк", "Игла", "Ирис", "Индейка"] },
    { letter: "Й", words: ["Йогурт", "Йод", "Йети", "Йорк", "Йога"] },
    { letter: "К", words: ["Корабль", "Кот", "Карандаш", "Кукла", "Крокодил"] },
    { letter: "Л", words: ["Лиса", "Лев", "Луна", "Лимон", "Лодка"] },
    { letter: "М", words: ["Мяч", "Медведь", "Машина", "Молоко", "Море"] },
    { letter: "Н", words: ["Носорог", "Носки", "Небо", "Нитки", "Нора"] },
    { letter: "О", words: ["Облако", "Окно", "Остров", "Одуванчик", "Осьминог"] },
    { letter: "П", words: ["Птица", "Панда", "Пирог", "Пальма", "Паровоз"] },
    { letter: "Р", words: ["Радуга", "Рыба", "Ракета", "Робот", "Ромашка"] },
    { letter: "С", words: ["Солнце", "Собака", "Слон", "Сыр", "Самолёт"] },
    { letter: "Т", words: ["Тигр", "Торт", "Туча", "Трактор", "Телефон"] },
    { letter: "У", words: ["Утка", "Улитка", "Улыбка", "Улица", "Утюг"] },
    { letter: "Ф", words: ["Фонарик", "Фламинго", "Фея", "Флаг", "Фрукты"] },
    { letter: "Х", words: ["Хлеб", "Хомяк", "Хвост", "Холодильник", "Художник"] },
    { letter: "Ц", words: ["Цыплёнок", "Цветок", "Цирк", "Цапля", "Цифра"] },
    { letter: "Ч", words: ["Черепаха", "Часы", "Чайник", "Чемодан", "Чашка"] },
    { letter: "Ш", words: ["Шар", "Шуба", "Шоколад", "Шишка", "Шмель"] },
    { letter: "Щ", words: ["Щука", "Щенок", "Щётка", "Щавель", "Щит"] },
    { letter: "Ъ", words: ["Подъезд", "Объём", "Съёмка", "Объявление", "Съезд"] },
    { letter: "Ы", words: ["Сыр", "Мышь", "Рыба", "Дым", "Тыква"] },
    { letter: "Ь", words: ["Семья", "Конь", "Пальто", "Мальчик", "Медведь"] },
    { letter: "Э", words: ["Эскимо", "Экран", "Экскаватор", "Эхо", "Этажерка"] },
    { letter: "Ю", words: ["Юла", "Юбка", "Юрта", "Юнга", "Юмор"] },
    { letter: "Я", words: ["Яблоко", "Ягода", "Якорь", "Ящерица", "Яйцо"] }
];

let selectedLetter = null;
const wordIndexes = Object.fromEntries(alphabet.map((letterData) => [letterData.letter, 0]));

const lettersGrid = document.getElementById("lettersGrid");
const bigLetter = document.getElementById("bigLetter");
const wordsBlock = document.getElementById("wordsBlock");
const targetLetter = document.getElementById("targetLetter");
const balloons = document.getElementById("balloons");
const screens = document.querySelectorAll(".screen");
const balloonColors = ["#ff6b6b", "#4dabf7", "#51cf66", "#ff922b", "#9775fa"];
const celebrationPhrases = ["Молодец!", "Отлично!", "Супер!", "Здорово!"];
const balloonSize = 90;
let correctBalloonsLeft = 0;
let nextRoundTimeout = null;
let animationFrameId = null;
let lastAnimationTime = null;
let movingBalloons = [];

function showScreen(screenId) {
    screens.forEach((screen) => {
        screen.classList.toggle("active", screen.id === screenId);
    });
}

function showLetter(letterData) {
    selectedLetter = letterData;
    const wordIndex = wordIndexes[selectedLetter.letter];
    const word = selectedLetter.words[wordIndex];

    wordIndexes[selectedLetter.letter] = (wordIndex + 1) % selectedLetter.words.length;
    bigLetter.textContent = selectedLetter.letter;
    wordsBlock.innerHTML = `<div class="wordCard">${word}</div>`;
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
    card.addEventListener("click", () => showLetter(letterData));
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
