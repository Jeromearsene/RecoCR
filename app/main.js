(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var DOMElementsName = ['result', 'dropzone', 'circle', 'containerCircle', 'resultContent', 'circleProgress', 'dropHereLabel', 'circlePercent', 'menu', 'popupMenu', 'counterContent'];

module.exports = DOMElementsName.reduce(function (acc, elementName) {
    acc[elementName] = document.getElementById(elementName);
    return acc;
}, Object.create(null));

},{}],2:[function(require,module,exports){
'use strict';

var DOM = require('./../global/DOM');

ipcRenderer.on('counter', function (event, counter) {
    DOM.counterContent.innerHTML = counter + '/5';
});

},{"./../global/DOM":1}],3:[function(require,module,exports){
'use strict';

//import {DOM} from './const';
var DOM = require('./../global/DOM');

DOM.menu.addEventListener('click', function () {
    if (DOM.menu.className == "open") {
        DOM.menu.className = "";
        DOM.popupMenu.className = "masked";
    } else {
        DOM.menu.className = "open";
        DOM.popupMenu.className = "";
    }
});

},{"./../global/DOM":1}],4:[function(require,module,exports){
'use strict';

require('./interface/counter');
require('./interface/menu');
require('./process/dropzone');

},{"./interface/counter":2,"./interface/menu":3,"./process/dropzone":6}],5:[function(require,module,exports){
"use strict";

//import {DOM} from './const';
var DOM = require('./../global/DOM');

var emptyColor = "white";
var loadColor = "#6699f6";

var lDegree = 90;
var lColor = emptyColor;
var rDegree = 90;
var rColor = loadColor;

var lGradient = "linear-gradient(" + lDegree + "deg, " + lColor + " 50%, " + rColor + " 50%, " + rColor + "),";
var rGradient = "linear-gradient(" + rDegree + "deg, " + lColor + " 50%, " + rColor + " 50%, " + rColor + ");";

var ratio = 3.6;

function drawCircle(progressPercent) {
    if (progressPercent < 50) {
        rDegree = progressPercent * ratio - 90;
    } else {
        lColor = loadColor;
        rColor = emptyColor;
        lDegree = -90;
        rDegree = (progressPercent - 50) * ratio - 90;
    }

    lGradient = "linear-gradient(" + lDegree + "deg, " + lColor + " 50%, transparent 50%, transparent),";
    rGradient = "linear-gradient(" + rDegree + "deg, " + lColor + " 50%, " + rColor + " 50%, " + rColor + ")";

    DOM.circle.style.backgroundImage = lGradient + rGradient;
}

// function testCircle(i)
// {
//         setTimeout(function ()
//         {
//             drawCircle(i);
//             let newI = i+1;
//             if(i<100)
//                 testCircle(newI);
//         }, 50);
//
// }


module.exports = drawCircle;

},{"./../global/DOM":1}],6:[function(require,module,exports){
'use strict';

var recognize = require('./recognize');
var DOM = require('./../global/DOM');

DOM.dropzone.ondrop = function (e) {
    e.preventDefault();

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = e.dataTransfer.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var f = _step.value;

            DOM.circle.className = "";
            DOM.dropzone.classList.add("masked");
            DOM.dropHereLabel.classList.add("masked");
            DOM.circleProgress.classList.remove("masked");
            DOM.circlePercent.classList.remove("masked");

            DOM.circleProgress.style.backgroundImage = 'url(\'' + f.path + '\')';
            recognize(f.path);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

DOM.dropzone.addEventListener("dragenter", function (event) {
    DOM.circle.classList.add("hover");
});

DOM.dropzone.addEventListener("dragleave", function (event) {
    DOM.circle.classList.remove("hover");
});

},{"./../global/DOM":1,"./recognize":7}],7:[function(require,module,exports){
'use strict';

var DOM = require('./../global/DOM');
var displayResult = require('./result');
var drawCircle = require('./drawCircle');

function recognize(image) {
    var bool = false;

    Tesseract.recognize(image).progress(function (p) {
        console.log(p);
        if (!bool) {
            bool = p.status == "recognizing text";
            drawCircle(0);
        } else {
            drawCircle(p.progress * 100);
            DOM.circlePercent.innerHTML = parseInt(p.progress * 100) + "%";
        }
    }).then(function (result) {
        result.lines.map(function (line) {
            var pContent = line.words.reduce(function (old, actual) {
                return old + adStyleToElement(actual);
            }, "");

            var p = document.createElement("p");
            p.innerHTML = pContent;

            DOM.resultContent.appendChild(p);
        });

        displayResult();
    });

    function adStyleToElement(e) {
        var result = e.text + ' ';

        /*if (e.is_bold)
            result = `<b>${result}</b>`
        if (e.is_italic)
            result = `<i>${result}</i>`*/

        return result;
    }
}

module.exports = recognize;

},{"./../global/DOM":1,"./drawCircle":5,"./result":8}],8:[function(require,module,exports){
"use strict";

var DOM = require('./../global/DOM');

module.exports = function () {
    DOM.result.className = "";
    DOM.containerCircle.className = "masked";
};

},{"./../global/DOM":1}]},{},[4]);
