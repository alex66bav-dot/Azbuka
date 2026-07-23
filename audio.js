(function () {
    "use strict";

    const soundEnabledStorageKey = "azbukaSoundEnabled";
    const audioRoots = Object.freeze({
        letters: "assets/audio/letters",
        words: "assets/audio/words",
        effects: "assets/audio/effects"
    });
    const effectNames = ["click", "correct", "wrong", "win", "celebration"];
    const preloadedEffects = new Map(effectNames.map((name) => {
        const audio = new Audio(`${audioRoots.effects}/${name}.mp3`);

        audio.preload = "auto";
        audio.load();
        return [name, audio];
    }));
    let voiceAudio = null;
    const activeEffects = new Set();

    function loadSoundEnabled() {
        try {
            return localStorage.getItem(soundEnabledStorageKey) !== "false";
        } catch {
            return true;
        }
    }

    let soundEnabled = loadSoundEnabled();

    function safelyPlay(audio, onFinish) {
        const finish = () => {
            audio.removeEventListener("ended", finish);
            audio.removeEventListener("error", finish);
            onFinish?.();
        };

        audio.addEventListener("ended", finish);
        audio.addEventListener("error", finish);

        try {
            const playResult = audio.play();
            playResult?.catch(finish);
        } catch {
            finish();
        }
    }

    function stopVoice() {
        if (!voiceAudio) {
            return;
        }

        voiceAudio.pause();
        voiceAudio.removeAttribute("src");
        voiceAudio.load();
        voiceAudio = null;
    }

    function stopEffects() {
        const clickAudio = preloadedEffects.get("click");

        if (clickAudio) {
            clickAudio.pause();
            clickAudio.currentTime = 0;
        }

        activeEffects.forEach((audio) => {
            audio.pause();
            audio.removeAttribute("src");
            audio.load();
        });
        activeEffects.clear();
    }

    function playVoice(path) {
        if (!soundEnabled || !path) {
            return;
        }

        stopVoice();
        const audio = new Audio(path);
        voiceAudio = audio;
        safelyPlay(audio, () => {
            if (voiceAudio === audio) {
                voiceAudio = null;
            }
        });
    }

    function playEffect(name) {
        if (!soundEnabled || !name) {
            return;
        }

        if (name === "click") {
            const clickAudio = preloadedEffects.get("click");

            if (!clickAudio) {
                return;
            }

            clickAudio.pause();
            clickAudio.currentTime = 0;

            try {
                clickAudio.play()?.catch(() => {});
            } catch {
                // A mobile browser can reject playback until its first user gesture.
            }

            return;
        }

        const audio = new Audio(`${audioRoots.effects}/${name}.mp3`);
        activeEffects.add(audio);
        safelyPlay(audio, () => activeEffects.delete(audio));
    }

    function setEnabled(enabled) {
        soundEnabled = Boolean(enabled);

        try {
            localStorage.setItem(soundEnabledStorageKey, String(soundEnabled));
        } catch {
            // Storage can be unavailable in private/restricted browser contexts.
        }

        if (!soundEnabled) {
            stopVoice();
            stopEffects();
        }

        window.dispatchEvent(new CustomEvent("azbuka:soundchange", {
            detail: { enabled: soundEnabled }
        }));
    }

    window.AzbukaAudio = Object.freeze({
        roots: audioRoots,
        isEnabled: () => soundEnabled,
        setEnabled,
        prepare: () => preloadedEffects.forEach((audio) => audio.load()),
        playLetter: (fileName) => playVoice(fileName ? `${audioRoots.letters}/${fileName}.mp3` : null),
        playWord: (fileName) => playVoice(fileName ? `${audioRoots.words}/${fileName}.mp3` : null),
        playEffect,
        stopVoice,
        stopAll: () => {
            stopVoice();
            stopEffects();
        }
    });
}());
