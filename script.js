window.dataLayer=window.dataLayer||[];function n(){dataLayer.push(arguments)}n("js",new Date);n("config","UA-162143380-1");

import {RandomCaseString} from "./typedText.js";

const faviconProps = {
    text: 'Sten Laane 🚀',
    font: 'Aino Headline',
    color: '#323330',
    size: 32,
    step: 0.5,
    background: "#F0DB4F",
    marginBottom: 3,
};

const faviconMarquee = new FaviconMarquee(faviconProps);
faviconMarquee.start(1000/24);

const randomCase1 = new RandomCaseString("Sten Arthur Laane^1000");
const randomCase2 = new RandomCaseString("Sten Laane^1000");
const github = '<a href="https://github.com/StenAL" onclick="return false"><img class="github-icon" src="github.svg" alt="GitHub"> @StenAL</a>^1000'
const linkedIn = '<a href="https://www.linkedin.com/in/sten-laane/" onclick="return false"><img class="linkedin-icon" src="linkedIn.svg" alt="LinkedIn"> sten-laane</a>^1000'


const typedTextProps = {
    strings: [
        'Sten Laane^1000', 'Sten Arthur Laane^1000', randomCase1,
        'Стэн Лаане^1000', '<span class="mirrored">Sten Laane</span>^1000',
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

new Typed('.typed', typedTextProps);