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

/*
    Weird img tags with svg-to-base64 src since
    1) Using a img with a normal src makes typed.js generate a new network request on every rerender which results in the img occasionally disappearing
    2) To use a svg tag we need a path tag inside in which case typed.js renders it in 2 ticks instead of 1 which leaves a blank space for some time
    The base64 src is cached and only rendered once, avoiding these problems.
 */
export const github = '<a href="https://github.com/StenAL" onclick="return false" target="_blank" rel="noreferrer"><img class="github-icon" src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgZmlsbD0iIzMyMzMzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMTYuMjQgMjJhMSAxIDAgMDEtMS0xdi0yLjZhMi4xNSAyLjE1IDAgMDAtLjU0LTEuNjYgMSAxIDAgMDEuNjEtMS42N0MxNy43NSAxNC43OCAyMCAxNCAyMCA5Ljc3YTQgNCAwIDAwLS42Ny0yLjIyIDIuNzUgMi43NSAwIDAxLS40MS0yLjA2IDMuNzEgMy43MSAwIDAwMC0xLjQxIDcuNjUgNy42NSAwIDAwLTIuMDkgMS4wOSAxIDEgMCAwMS0uODQuMTUgMTAuMTUgMTAuMTUgMCAwMC01LjUyIDAgMSAxIDAgMDEtLjg0LS4xNSA3LjQgNy40IDAgMDAtMi4xMS0xLjA5IDMuNTIgMy41MiAwIDAwMCAxLjQxIDIuODQgMi44NCAwIDAxLS40MyAyLjA4IDQuMDcgNC4wNyAwIDAwLS42NyAyLjIzYzAgMy44OSAxLjg4IDQuOTMgNC43IDUuMjlhMSAxIDAgMDEuODIuNjYgMSAxIDAgMDEtLjIxIDEgMi4wNiAyLjA2IDAgMDAtLjU1IDEuNTZWMjFhMSAxIDAgMDEtMiAwdi0uNTdhNiA2IDAgMDEtNS4yNy0yLjA5IDMuOSAzLjkgMCAwMC0xLjE2LS44OCAxIDEgMCAxMS41LTEuOTQgNC45MyA0LjkzIDAgMDEyIDEuMzZjMSAxIDIgMS44OCAzLjkgMS41MmEzLjg5IDMuODkgMCAwMS4yMy0xLjU4Yy0yLjA2LS41Mi01LTItNS03YTYgNiAwIDAxMS0zLjMzLjg1Ljg1IDAgMDAuMTMtLjYyIDUuNjkgNS42OSAwIDAxLjMzLTMuMjEgMSAxIDAgMDEuNjMtLjU3Yy4zNC0uMSAxLjU2LS4zIDMuODcgMS4yYTEyLjE2IDEyLjE2IDAgMDE1LjY5IDBjMi4zMS0xLjUgMy41My0xLjMxIDMuODYtMS4yYTEgMSAwIDAxLjYzLjU3IDUuNzEgNS43MSAwIDAxLjMzIDMuMjIuNzUuNzUgMCAwMC4xMS41NyA2IDYgMCAwMTEgMy4zNGMwIDUuMDctMi45MiA2LjU0LTUgN2E0LjI4IDQuMjggMCAwMS4yMiAxLjY3VjIxYTEgMSAwIDAxLS45NCAxeiIvPg0KPC9zdmc+DQo=" alt="GitHub"> @StenAL</a>^1000'
export const linkedIn = '<a href="https://www.linkedin.com/in/sten-laane/" onclick="return false" target="_blank" rel="noreferrer"><img class="linkedin-icon" src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjUuOTEgMjQiIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgZmlsbD0iIzMyMzMzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8c3R5bGU+DQogICAgcGF0aCB7DQogICAgICAgIGZpbGw6IG5vbmU7DQogICAgICAgIHN0cm9rZTogIzMyMzMzMDsNCiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOw0KICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOw0KICAgICAgICBzdHJva2Utd2lkdGg6IDEuNXB4Ow0KICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC4wNSk7DQogICAgfQ0KICAgIDwvc3R5bGU+DQogICAgPHBhdGggZD0iTTUuODMsMTkuMTdWMTAuNTZBMS45MiwxLjkyLDAsMCwwLDMuOTEsOC42NUgzYTEuOTIsMS45MiwwLDAsMC0xLjkxLDEuOTFWMjNINS44MyIvPg0KICAgIDxwYXRoIGQ9Ik0xNC40MiwxOS4xN1YxNi44OGMwLTQuNDcsNS43Ni00LjgzLDUuNzYsMHY0LjJBMS45MSwxLjkxLDAsMCwwLDIyLjEsMjNIMjNBMS45MSwxLjkxLDAsMCwwLDI1LDIxLjA4VjE0LjI3QzI1LDYuNzMsMTYuNDIsNywxNC40MSwxMC43MXYtLjE0YTEuOTEsMS45MSwwLDAsMC0xLjktMS45MmgtLjk0YTEuOTIsMS45MiwwLDAsMC0xLjkxLDEuOTFWMjNoNC43NiIvPg0KICAgIDxwYXRoIGQ9Ik0zLjQ0LDUuNzRBMi4zNywyLjM3LDAsMSwxLDUuODEsMy4zNyIvPg0KPC9zdmc+DQo=" alt="LinkedIn"> sten-laane</a>^1000'
