/*! For license information please see script.js.LICENSE.txt */
(()=>{var t={277:t=>{window,t.exports=function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";function n(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}s.r(e);var i=function(){function t(e){var s,n,i,r,o,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=null!==(s=e.size)&&void 0!==s?s:32,this.text=null!==(n=e.text)&&void 0!==n?n:"SCROLLING TEXT",this.color=null!==(i=e.color)&&void 0!==i?i:"green",this.step=null!==(r=e.step)&&void 0!==r?r:.5,this.font=null!==(o=e.font)&&void 0!==o?o:"Arial, sans-serif",this.marginBottom=null!==(a=e.marginBottom)&&void 0!==a?a:0,this.background=e.background,this.pixelsScrolled=0}var e,s;return e=t,(s=[{key:"start",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3/24;this.favicon=document.createElement("link"),this.favicon.type="image/jpeg",this.favicon.rel="shortcut icon",document.head.appendChild(this.favicon),setInterval((function(){return t.draw()}),e)}},{key:"createCanvas",value:function(){this.canvas=document.createElement("canvas"),this.canvas.width=this.size,this.canvas.height=this.size,this.canvas.hidden=!0,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.size+"px "+this.font,this.textWidth=Math.ceil(this.ctx.measureText(this.text).width)}},{key:"draw",value:function(){this.createCanvas(),this.background?(this.ctx.fillStyle=this.background,this.ctx.rect(0,0,this.size,this.size),this.ctx.fill()):this.ctx.clearRect(0,0,this.size,this.size),this.pixelsScrolled+=this.step,this.pixelsScrolled>this.textWidth+2*this.size&&(this.pixelsScrolled=0);var t=-1*this.pixelsScrolled+this.size;this.ctx.fillStyle=this.color,this.ctx.fillText(this.text,t,this.size-this.marginBottom),this.favicon.href=this.canvas.toDataURL("image/png",.3)}}])&&n(e.prototype,s),t}();e.default=i}]).default},614:function(t){var e;e=function(){return function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}return s.m=t,s.c=e,s.p="",s(0)}([function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=s(1),r=s(3),o=function(){function t(e,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i.initializer.load(this,s,e),this.begin()}return n(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=r.htmlParser.typeHtmlChars(t,e,s);var n=0,o=t.substr(e);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;a+=(o=/\d+/.exec(o)[0]).length,n=parseInt(o),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===o.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+l+c,i--}s.timeout=setTimeout((function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))}),n)}),n):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){s.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=r.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&n===i.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))}),n)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=o,t.exports=e.default},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},r=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),o=(n=s(2))&&n.__esModule?n:{default:n},a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"load",value:function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=i({},o.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),r=n.length;if(r)for(var a=0;a<r;a+=1){var u=n[a];t.strings.push(u.innerHTML.trim())}}for(var a in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[a]=a;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.type="text/css",s.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==s.length&&(s.innerHTML=n,document.body.appendChild(s))}}}]),t}();e.default=a;var u=new a;e.initializer=u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return s(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&!(--e<0););e--}return e}}]),t}();e.default=n;var i=new n;e.htmlParser=i}])},t.exports=e()}},e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=t=>t.split("").map((t=>Math.round(Math.random())?t.toUpperCase():t.toLowerCase())).join(""),e=function(s){const n=t(s),i=new String(n);return i.display=n,Object.setPrototypeOf(i,e.prototype),i};e.prototype.substr=function(e,s){return 0===e&&this.randomize&&(this.display=t(this.display),this.randomize=!1),e===this.display.length-5&&void 0===s&&(this.randomize=!0),this.display.substr(e,s)},e.prototype.substring=function(t,e){return this.display.substring(t,e)},e.prototype.trim=function(){return this};var n=s(614),i=s.n(n),r=s(277),o=s.n(r);function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("js",new Date),a("config","G-3BTYXW2CW5"),new(o())({text:"Sten Laane 🚀",font:"Aino Headline",color:"#323330",size:32,step:.5,background:"#F0DB4F",marginBottom:3}).start(1e3/24);const u={strings:["Sten Laane^1000","Sten Arthur Laane^1000",new e("Sten Arthur Laane^1000"),"Стэн Лаане^1000",'<span class="mirrored">Sten Laane</span>^1000','<a href="https://github.com/StenAL" onclick="return false" target="_blank" rel="noreferrer"><img class="github-icon" src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgZmlsbD0iIzMyMzMzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMTYuMjQgMjJhMSAxIDAgMDEtMS0xdi0yLjZhMi4xNSAyLjE1IDAgMDAtLjU0LTEuNjYgMSAxIDAgMDEuNjEtMS42N0MxNy43NSAxNC43OCAyMCAxNCAyMCA5Ljc3YTQgNCAwIDAwLS42Ny0yLjIyIDIuNzUgMi43NSAwIDAxLS40MS0yLjA2IDMuNzEgMy43MSAwIDAwMC0xLjQxIDcuNjUgNy42NSAwIDAwLTIuMDkgMS4wOSAxIDEgMCAwMS0uODQuMTUgMTAuMTUgMTAuMTUgMCAwMC01LjUyIDAgMSAxIDAgMDEtLjg0LS4xNSA3LjQgNy40IDAgMDAtMi4xMS0xLjA5IDMuNTIgMy41MiAwIDAwMCAxLjQxIDIuODQgMi44NCAwIDAxLS40MyAyLjA4IDQuMDcgNC4wNyAwIDAwLS42NyAyLjIzYzAgMy44OSAxLjg4IDQuOTMgNC43IDUuMjlhMSAxIDAgMDEuODIuNjYgMSAxIDAgMDEtLjIxIDEgMi4wNiAyLjA2IDAgMDAtLjU1IDEuNTZWMjFhMSAxIDAgMDEtMiAwdi0uNTdhNiA2IDAgMDEtNS4yNy0yLjA5IDMuOSAzLjkgMCAwMC0xLjE2LS44OCAxIDEgMCAxMS41LTEuOTQgNC45MyA0LjkzIDAgMDEyIDEuMzZjMSAxIDIgMS44OCAzLjkgMS41MmEzLjg5IDMuODkgMCAwMS4yMy0xLjU4Yy0yLjA2LS41Mi01LTItNS03YTYgNiAwIDAxMS0zLjMzLjg1Ljg1IDAgMDAuMTMtLjYyIDUuNjkgNS42OSAwIDAxLjMzLTMuMjEgMSAxIDAgMDEuNjMtLjU3Yy4zNC0uMSAxLjU2LS4zIDMuODcgMS4yYTEyLjE2IDEyLjE2IDAgMDE1LjY5IDBjMi4zMS0xLjUgMy41My0xLjMxIDMuODYtMS4yYTEgMSAwIDAxLjYzLjU3IDUuNzEgNS43MSAwIDAxLjMzIDMuMjIuNzUuNzUgMCAwMC4xMS41NyA2IDYgMCAwMTEgMy4zNGMwIDUuMDctMi45MiA2LjU0LTUgN2E0LjI4IDQuMjggMCAwMS4yMiAxLjY3VjIxYTEgMSAwIDAxLS45NCAxeiIvPg0KPC9zdmc+DQo=" alt="GitHub"> @StenAL</a>^1000','<a href="https://www.linkedin.com/in/sten-laane/" onclick="return false" target="_blank" rel="noreferrer"><img class="linkedin-icon" src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjUuOTEgMjQiIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgZmlsbD0iIzMyMzMzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8c3R5bGU+DQogICAgcGF0aCB7DQogICAgICAgIGZpbGw6IG5vbmU7DQogICAgICAgIHN0cm9rZTogIzMyMzMzMDsNCiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOw0KICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOw0KICAgICAgICBzdHJva2Utd2lkdGg6IDEuNXB4Ow0KICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC4wNSk7DQogICAgfQ0KICAgIDwvc3R5bGU+DQogICAgPHBhdGggZD0iTTUuODMsMTkuMTdWMTAuNTZBMS45MiwxLjkyLDAsMCwwLDMuOTEsOC42NUgzYTEuOTIsMS45MiwwLDAsMC0xLjkxLDEuOTFWMjNINS44MyIvPg0KICAgIDxwYXRoIGQ9Ik0xNC40MiwxOS4xN1YxNi44OGMwLTQuNDcsNS43Ni00LjgzLDUuNzYsMHY0LjJBMS45MSwxLjkxLDAsMCwwLDIyLjEsMjNIMjNBMS45MSwxLjkxLDAsMCwwLDI1LDIxLjA4VjE0LjI3QzI1LDYuNzMsMTYuNDIsNywxNC40MSwxMC43MXYtLjE0YTEuOTEsMS45MSwwLDAsMC0xLjktMS45MmgtLjk0YTEuOTIsMS45MiwwLDAsMC0xLjkxLDEuOTFWMjNoNC43NiIvPg0KICAgIDxwYXRoIGQ9Ik0zLjQ0LDUuNzRBMi4zNywyLjM3LDAsMSwxLDUuODEsMy4zNyIvPg0KPC9zdmc+DQo=" alt="LinkedIn"> sten-laane</a>^1000',new e("Sten Laane^1000")],showCursor:!0,smartBackspace:!0,loop:!0,typeSpeed:125,backSpeed:50};new(i())(".typed",u)})()})();