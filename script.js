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

const typedTextProps = {
    strings: ['Sten Laane^1000', 'Sten Arthur Laane^1000',
        'Стэн Лаане^1000', '<span class="mirrored">Sten Laane</span>',],
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
