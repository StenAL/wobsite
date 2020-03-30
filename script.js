window.dataLayer=window.dataLayer||[];function n(){dataLayer.push(arguments)}n("js",new Date);n("config","UA-162143380-1");

import {FaviconMarquee} from "./faviconMarquee.js";

const faviconProps = {
    text: 'Sten Laane 🚀',
    font: 'Aino Headline',
    color: '#323330',
    size : 96,
    background: "#F0DB4F",
    paddingBottom: 5,
};

const faviconMarquee = new FaviconMarquee(faviconProps);
faviconMarquee.start(35);



const randomizeStringCase = (string) => {
    return string.split('')
        .map((c) => Math.round(Math.random()) ? c.toUpperCase() : c.toLowerCase())
        .join('');
};

const RandomCaseString = function(text) {
    const randomCaseInput = randomizeStringCase(text);
    const stringObject = new String(randomCaseInput);
    stringObject.display = randomCaseInput;
    Object.setPrototypeOf(stringObject, RandomCaseString.prototype);
    return stringObject;
};

RandomCaseString.prototype.substr = function(num, len) {
    if (num === 0 && this.randomize) {
        this.display = randomizeStringCase(this.display);
        this.randomize = false;
    }
    if (num === this.display.length - 5 && len === undefined) {
        this.randomize = true;
    }
    return this.display.substr(num, len);
};

RandomCaseString.prototype.substring = function(num, len) {
    return this.display.substring(num, len);
};

RandomCaseString.prototype.trim = function() {
    return this;
};


const randomCase1 = new RandomCaseString("Sten Arthur Laane^1000");
const randomCase2 = new RandomCaseString("Sten Laane^1000");


const typedTextProps = {
    strings: [
        'Sten Laane^1000', 'Sten Arthur Laane^1000', randomCase1,
        'Стэн Лаане^1000', '<span class="mirrored">Sten Laane</span>^1000',
        '<i class="fab fa-github"></i> <a href="https://github.com/StenAL" target="_blank">@StenAL</a>^1000',
         randomCase2,],
    showCursor: true,
    smartBackspace: true,
    loop: true,
    typeSpeed: 125,
    backSpeed: 50,
};

const typedTextObserver = new MutationObserver(() => {
    const typedText = document.querySelector(".typed");

    const mirroredText = typedText.querySelector(".mirrored");
    const typedTextCursor = typedText.parentElement.querySelector(".typed-cursor");

    if (!typedText.cursorReversed && mirroredText) {
        typedText.before(typedTextCursor);
        typedText.cursorReversed = true;
    } else if (typedText.cursorReversed && !mirroredText) {
        typedText.parentElement.appendChild(typedTextCursor);
        typedText.cursorReversed = false;
    }
});

const observerOptions = {
    childList: true,
    subtree: true,
};

typedTextObserver.observe(document.querySelector(".typed"), observerOptions);
new Typed('.typed', typedTextProps);
