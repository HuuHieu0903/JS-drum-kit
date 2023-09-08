const soundCrash = new Audio("../sounds/crash.wav");
const soundRide = new Audio("../sounds/ride.wav");
const soundHiHatOpen = new Audio("../sounds/hihat-open.wav");
const soundHiHatClose = new Audio("../sounds/hihat-close.wav");
const soundTomMid = new Audio("../sounds/tom-mid.wav");
const soundTomHigh = new Audio("../sounds/tom-high.wav");
const soundTomLow = new Audio("../sounds/tom-low.wav");
const soundSnare = new Audio("../sounds/snare.wav");
const soundKick = new Audio("../sounds/kick.wav");

const crash = document.getElementsByClassName("crash")[0];
const hiHat = document.getElementsByClassName("hi-hat")[0];

const keydown = (key) => {
    const keyElement = document.getElementsByClassName(
        `key-${key.toUpperCase()}`
    )[0];
    keyElement.classList.add("keydown");
    keyElement.addEventListener("transitionend", () => {
        keyElement.classList.remove("keydown");
    });
};

const crashPlaying = () => {
    crash.classList.add("playing");
    crash.addEventListener("transitionend", () => {
        crash.classList.remove("playing");
    });
};

const hihatPlaying = () => {
    hiHat.classList.add("playing");
    hiHat.addEventListener("transitionend", () => {
        hiHat.classList.remove("playing");
    });
};

window.addEventListener("keydown", (e) => {
    if (e.repeat) {
        return;
    }
    switch (e.keyCode) {
        case 69:
            soundCrash.currentTime = 0;
            soundCrash.play();
            keydown(e.key);
            crashPlaying();
            break;
        case 82:
            soundRide.currentTime = 0;
            soundRide.play();
            keydown(e.key);
            crashPlaying();
            break;
        case 73:
            soundHiHatOpen.currentTime = 0;
            soundHiHatOpen.play();
            keydown(e.key);
            hihatPlaying();
            break;
        case 75:
            soundHiHatClose.currentTime = 0;
            soundHiHatClose.play();
            keydown(e.key);
            hihatPlaying();
            break;
        case 71:
            soundTomMid.currentTime = 0;
            soundTomMid.play();
            keydown(e.key);
            break;
        case 72:
            soundTomHigh.currentTime = 0;
            soundTomHigh.play();
            keydown(e.key);
            break;
        case 74:
            soundSnare.currentTime = 0;
            soundSnare.play();
            keydown(e.key);
            break;
        case 70:
            soundTomLow.currentTime = 0;
            soundTomLow.play();
            keydown(e.key);
            break;
        case 86:
        case 66:
            soundKick.currentTime = 0;
            soundKick.play();
            keydown(e.key);
            break;

        default:
            break;
    }
});
