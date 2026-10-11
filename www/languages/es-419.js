(function () {
    "use strict";

    // Neutral Latin American Spanish with matching es-419 voice recordings.
    const wordsByLetter = Object.freeze({
        A: ["Avión", "Árbol", "Abeja", "Ardilla", "Arcoíris"],
        B: ["Balón", "Barco", "Bebé", "Búho", "Banana"],
        C: ["Casa", "Caballo", "Conejo", "Carro", "Cuchara"],
        D: ["Dado", "Delfín", "Dinosaurio", "Diente", "Dragón"],
        E: ["Elefante", "Estrella", "Escoba", "Espejo", "Erizo"],
        F: ["Flor", "Foca", "Fresa", "Fantasma", "Fuego"],
        G: ["Gato", "Gallina", "Gorila", "Globo", "Guitarra"],
        H: ["Helado", "Hormiga", "Hoja", "Hipopótamo", "Huevo"],
        I: ["Isla", "Iguana", "Insecto", "Imán", "Iglesia"],
        J: ["Jirafa", "Jugo", "Jabón", "Jardín", "Juguete"],
        K: ["Koala", "Kiwi", "Kétchup", "Kárate", "Kayak"],
        L: ["León", "Luna", "Lápiz", "Limón", "Libro"],
        M: ["Moto", "Mono", "Manzana", "Mariposa", "Mesa"],
        N: ["Nube", "Nariz", "Naranja", "Nido", "Nuez"],
        Ñ: ["Niño", "Piña", "Muñeca", "Araña", "Bañera"],
        O: ["Oso", "Oveja", "Olla", "Ola", "Oruga"],
        P: ["Perro", "Pato", "Pelota", "Pan", "Payaso"],
        Q: ["Paquete", "Parque", "Raqueta", "Mosquito", "Máquina"],
        R: ["Ratón", "Rana", "Rueda", "Robot", "Reloj"],
        S: ["Sol", "Sapo", "Serpiente", "Silla", "Sombrero"],
        T: ["Tigre", "Tortuga", "Tren", "Tomate", "Tambor"],
        U: ["Uva", "Ukelele", "Unicornio", "Uniforme", "Urraca"],
        V: ["Vaca", "Vaso", "Vestido", "Vela", "Volcán"],
        W: ["Sándwich", "Brownie", "Cowboy", "Halloween", "Hawaiano"],
        X: ["Taxi", "México", "Texto", "Éxito", "Boxeo"],
        Y: ["Yate", "Yogur", "Yo‑yo", "Yema", "Yegua"],
        Z: ["Zapato", "Zanahoria", "Zorro", "Zoológico", "Zancudo"]
    });

    // Ñ, Q, W and X are clearer as highlighted in-word letters, following the
    // established text-only treatment for Russian Ъ/Ы/Ь and English X.
    const textOnlyLetters = Object.freeze(["Ñ", "Q", "W", "X"]);
    const containedLetterWordPools = Object.freeze({
        Ñ: wordsByLetter.Ñ,
        Q: wordsByLetter.Q,
        W: wordsByLetter.W,
        X: wordsByLetter.X
    });
    // The 20 text-only words form one closed pool. For each active letter,
    // its five words are correct and the other 15 are distractors. Ordinary
    // image words must never be mixed into these text-only exercises.
    const exclusiveDistractorWordPools = Object.freeze({
        Ñ: [...wordsByLetter.Q, ...wordsByLetter.W, ...wordsByLetter.X],
        Q: [...wordsByLetter.Ñ, ...wordsByLetter.W, ...wordsByLetter.X],
        W: [...wordsByLetter.Ñ, ...wordsByLetter.Q, ...wordsByLetter.X],
        X: [...wordsByLetter.Ñ, ...wordsByLetter.Q, ...wordsByLetter.W]
    });

    // Exact object matches already present in the Russian and English sets.
    // New Spanish illustrations will use the fallback es-419 path below.
    const sharedImagePaths = Object.freeze({
        "Avión": "assets/images/en-us/a/airplane.webp",
        "Árbol": "assets/images/en-us/t/tree.webp",
        "Ardilla": "assets/images/letters/b/belka.webp",
        "Arcoíris": "assets/images/en-us/r/rainbow.webp",
        "Balón": "assets/images/en-us/b/ball.webp",
        "Barco": "assets/images/en-us/b/boat.webp",
        "Búho": "assets/images/en-us/o/owl.webp",
        "Banana": "assets/images/letters/b/banan.webp",
        "Casa": "assets/images/en-us/h/house.webp",
        "Caballo": "assets/images/en-us/h/horse-illustration.webp",
        "Carro": "assets/images/en-us/c/car.webp",
        "Delfín": "assets/images/en-us/d/dolphin.webp",
        "Dragón": "assets/images/en-us/d/dragon.webp",
        "Elefante": "assets/images/en-us/e/elephant.webp",
        "Estrella": "assets/images/en-us/s/star.webp",
        "Espejo": "assets/images/es-419/e/espejo-v2.webp",
        "Erizo": "assets/images/letters/yo/little_hedgehog.webp",
        "Flor": "assets/images/en-us/f/flower.webp",
        "Fresa": "assets/images/letters/z/wild_strawberry.webp",
        "Gato": "assets/images/en-us/c/cat.webp",
        "Globo": "assets/images/letters/sh/balloon.webp",
        "Guitarra": "assets/images/en-us/g/guitar.webp",
        "Helado": "assets/images/en-us/i/ice-cream.webp",
        "Hormiga": "assets/images/en-us/a/ant.webp",
        "Hoja": "assets/images/en-us/l/leaf.webp",
        "Hipopótamo": "assets/images/letters/b/begemot.webp",
        "Huevo": "assets/images/en-us/e/egg.webp",
        "Isla": "assets/images/en-us/i/island.webp",
        "Imán": "assets/images/es-419/i/iman-v2.webp",
        "Insecto": "assets/images/en-us/i/insect.webp",
        "Iglesia": "assets/images/es-419/i/iglesia-v2.webp",
        "Jirafa": "assets/images/en-us/g/giraffe.webp",
        "Jugo": "assets/images/en-us/j/juice.webp",
        "Jabón": "assets/images/es-419/j/jabon-v2.webp",
        "Juguete": "assets/images/letters/i/toy.webp",
        "Kiwi": "assets/images/es-419/k/kiwi-v2.webp",
        "León": "assets/images/en-us/l/lion.webp",
        "Luna": "assets/images/en-us/m/moon.webp",
        "Lápiz": "assets/images/en-us/p/pencil.webp",
        "Limón": "assets/images/en-us/l/lemon.webp",
        "Mono": "assets/images/en-us/m/monkey.webp",
        "Manzana": "assets/images/en-us/a/apple.webp",
        "Mariposa": "assets/images/en-us/b/butterfly.webp",
        "Nube": "assets/images/en-us/c/cloud.webp",
        "Nariz": "assets/images/en-us/n/nose.webp",
        "Naranja": "assets/images/en-us/o/orange.webp",
        "Nido": "assets/images/en-us/n/nest.webp",
        "Oso": "assets/images/en-us/b/bear.webp",
        "Oruga": "assets/images/letters/g/caterpillar.webp",
        "Perro": "assets/images/en-us/d/dog.webp",
        "Pato": "assets/images/en-us/d/duck.webp",
        "Pelota": "assets/images/en-us/b/ball.webp",
        "Pan": "assets/images/letters/kh/bread.webp",
        "Ratón": "assets/images/en-us/m/mouse.webp",
        "Rana": "assets/images/en-us/f/frog.webp",
        "Robot": "assets/images/en-us/r/robot.webp",
        "Reloj": "assets/images/letters/ch/clock.webp",
        "Sol": "assets/images/en-us/s/sun.webp",
        "Sapo": "assets/images/en-us/f/frog.webp",
        "Sombrero": "assets/images/en-us/h/hat.webp",
        "Tigre": "assets/images/en-us/t/tiger.webp",
        "Tortuga": "assets/images/en-us/t/turtle.webp",
        "Tren": "assets/images/letters/p/steam_locomotive.webp",
        "Tambor": "assets/images/letters/b/baraban.webp",
        "Uva": "assets/images/en-us/g/grapes.webp",
        "Ukelele": "assets/images/en-us/u/ukulele.webp",
        "Unicornio": "assets/images/en-us/u/unicorn.webp",
        "Volcán": "assets/images/en-us/v/volcano.webp",
        "Yate": "assets/images/en-us/y/yacht.webp",
        "Yogur": "assets/images/en-us/y/yogurt.webp",
        "Yo‑yo": "assets/images/en-us/y/yo-yo.webp",
        "Zorro": "assets/images/en-us/f/fox.webp",
        "Zoológico": "assets/images/en-us/z/zoo.webp"
    });

    function slugify(value) {
        return value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
    }

    const alphabet = Object.entries(wordsByLetter).map(([letter, words]) => ({
        letter,
        words: words.map((text) => ({
            text,
            audio: slugify(text),
            image: textOnlyLetters.includes(letter)
                ? null
                : sharedImagePaths[text] || `assets/images/es-419/${slugify(letter)}/${slugify(text)}.webp`
        }))
    }));

    window.AzbukaLanguages = window.AzbukaLanguages || {};
    window.AzbukaLanguages["es-419"] = Object.freeze({
        id: "es-419",
        label: "Alfabeto español",
        nativeLabel: "Español",
        alphabet,
        freeLetters: ["A", "B", "C"],
        textOnlyLetters,
        containsLetterLetters: textOnlyLetters,
        containedLetterWordPools,
        exclusiveDistractorWordPools,
        interface: Object.freeze({
            appTitle: "ABECEDARIO",
            appSubtitle: "Aprende el alfabeto en español",
            start: "Empezar",
            install: "Instalar la aplicación",
            chooseLetter: "Elige una letra",
            progress: "Completado",
            of: "de",
            demoNotice: "Demo: A, B y C están disponibles",
            parents: "Para adultos",
            settingsDescription: "Gestiona el progreso de tu hijo.",
            language: "Idioma y alfabeto",
            soundOn: "Sonido: activado",
            soundOff: "Sonido: desactivado",
            resetProgress: "Restablecer todo el progreso",
            resetQuestion: "¿Restablecer todo el progreso? Todas las letras completadas volverán a estar incompletas.",
            cancel: "Cancelar",
            reset: "Restablecer",
            close: "Cerrar",
            fullVersion: "Versión completa",
            lockedLetter: "Esta letra está disponible en la versión completa de la aplicación",
            buyFullVersion: "Comprar la versión completa",
            purchasePending: "El pago está pendiente de confirmación en Google Play",
            purchaseCanceled: "Compra cancelada. El acceso completo no se activó",
            playUnavailable: "Google Play no está disponible temporalmente. Inténtalo más tarde",
            openingPlay: "Abriendo Google Play…",
            purchaseUnavailable: "Las compras no están disponibles ahora. Inténtalo más tarde",
            back: "Atrás",
            letter: "Letra",
            nextWord: "Siguiente palabra",
            balloons: "Globos",
            findTwoWords: "Encuentra dos palabras",
            findWordsWithLetter: "Encuentra palabras que contienen la letra",
            findShadow: "Encuentra la sombra",
            connect: "Une con una línea",
            driveBus: "Conduce el autobús",
            newCards: "Nuevas tarjetas",
            newShadows: "Nuevas sombras",
            newRoad: "Nueva ruta",
            repeat: "Jugar de nuevo",
            toLetters: "Volver a las letras",
            startMarker: "Inicio",
            gameChoiceLabel: "Elige un minijuego",
            wordCardsLabel: "Tarjetas de palabras",
            sorterBoardLabel: "Arrastra la letra hasta su sombra",
            shadowLetter: "Sombra de la letra",
            busBoardLabel: "Conduce el autobús por el camino hasta la palabra",
            busLabel: "Autobús",
            loadingImageLabel: "Cargando la imagen",
            celebrations: ["¡Muy bien!", "¡Genial!", "¡Excelente!", "¡Súper!", "¡Buen trabajo!"]
        })
    });
}());
