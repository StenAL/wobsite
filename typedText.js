const randomizeStringCase = (string) => {
    return string.split('')
        .map((c) => Math.round(Math.random()) ? c.toUpperCase() : c.toLowerCase())
        .join('');
};

export const RandomCaseString = function(text) {
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
    if (num === this.display.length - 5 && len === undefined) { // length -5 to account for '^1000' at the end of the strings
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


const typedTextObserver = new MutationObserver(() => {
    const typedText = document.querySelector(".typed");

    const typedAnchorElement = typedText.querySelector("a");
    const mirroredText = typedText.querySelector(".mirrored");
    const typedTextCursor = typedText.parentElement.querySelector(".typed-cursor");

    if (!typedText.onmousedown && typedAnchorElement) {
        // Implementing anchor tags manually through onmousedown/onmouseup since browsers don't properly register
        // click events on typed text because of issues with updating the tag contents https://github.com/mattboldt/typed.js/issues/214
        // Other mouse events work properly though so this is a valid workaround
        typedText.onmousedown = () => typedText.clickedOn = true;
        typedText.onmouseup = () => {
            if (typedText.clickedOn) {
                typedText.clickedOn = false;
                window.open(typedAnchorElement.href, "_blank");
            }
        }
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

const observerOptions = {
    childList: true,
    subtree: true,
};

typedTextObserver.observe(document.querySelector(".typed"), observerOptions);
