import { RandomCaseString, github, linkedIn } from "./typedText.js";
import Typed from "typed.js";
import FaviconMarquee from "favicon-marquee";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "./style.css";

// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function n() {
    dataLayer.push(arguments);
}
n("js", new Date());
n("config", "G-3BTYXW2CW5");

const faviconProps = {
    text: "Sten Laane 🚀",
    font: "Aino Headline",
    color: "#323330",
    size: 32,
    step: 0.5,
    background: "#F0DB4F",
    marginBottom: 3,
};

const faviconMarquee = new FaviconMarquee(faviconProps);
faviconMarquee.start(1000 / 24);

const randomCase1 = new RandomCaseString("Sten Arthur Laane^1000");
const randomCase2 = new RandomCaseString("Sten Laane^1000");

const typedTextProps = {
    strings: [
        "Sten Laane^1000",
        "Sten Arthur Laane^1000",
        randomCase1,
        "Стэн Лаане^1000",
        '<span class="mirrored">Sten Laane</span>^1000',
        github,
        linkedIn,
        randomCase2,
    ],
    showCursor: true,
    smartBackspace: true,
    loop: true,
    typeSpeed: 125,
    backSpeed: 50,
};

const observerOptions = {
    childList: true,
    subtree: true,
};

const typedTextObserver = new MutationObserver(() => {
    const typedText = document.querySelector(".typed");

    const typedAnchorElement = typedText.querySelector("a");
    const mirroredText = typedText.querySelector(".mirrored");
    const typedTextCursor = typedText.parentElement.querySelector(".typed-cursor");

    if (!typedText.onmousedown && typedAnchorElement) {
        // Implementing anchor tags manually through onmousedown/onmouseup since browsers don't properly register
        // click events on typed text because of issues with updating the tag contents https://github.com/mattboldt/typed.js/issues/214
        // Other mouse events work properly though so this is a valid workaround
        typedText.onmousedown = () => (typedText.clickedOn = true);
        typedText.onmouseup = () => {
            if (typedText.clickedOn) {
                typedText.clickedOn = false;
                window.open(typedAnchorElement.href, "_blank");
            }
        };
    } else if (typedText.onmousedown && !typedAnchorElement) {
        typedText.onmousedown = undefined;
        typedText.onmouseup = undefined;
    }

    if (!typedText.cursorReversed && mirroredText) {
        typedText.before(typedTextCursor);
        typedText.cursorReversed = true;
    } else if (typedText.cursorReversed && !mirroredText) {
        typedText.parentElement.appendChild(typedTextCursor);
        typedText.cursorReversed = false;
    }
});

typedTextObserver.observe(document.querySelector(".typed"), observerOptions);

new Typed(".typed", typedTextProps);

document.querySelectorAll(".collapsible").forEach((el) => {
    const header = el.querySelector(".collapsible-header");
    header.addEventListener("click", () => {
        el.classList.toggle("collapsible-active");
        const content = el.querySelector(".collapsible-content");
        const arrow = el.querySelector(".arrow");
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        arrow.classList.toggle("arrow-right");
        arrow.classList.toggle("arrow-down");
    });
});
