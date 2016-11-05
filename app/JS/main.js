(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DOM = exports.DOM = {
    divResult: document.getElementById('result'),
    divDropzone: document.getElementById('dropzone'),
    divCircle: document.getElementById('circle'),
    divContainerCircle: document.getElementById('container-circle'),
    divResultContent: document.getElementById('resultContent'),
    divCircleProgress: document.getElementById('circle-progress'),
    labelDropHere: document.getElementById('dropHere-label'),
    circlePercent: document.getElementById("percent-circle")
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = drawCircle;

var _const = require("./const");

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

    _const.DOM.divCircle.style.backgroundImage = lGradient + rGradient;
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

},{"./const":1}],3:[function(require,module,exports){
'use strict';

var _recognize = require('./recognize');

var _recognize2 = _interopRequireDefault(_recognize);

var _const = require('./const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleFileSelect(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    evt.target.className = "masked";

    reader.onloadend = function (e) {
        (0, _recognize2.default)(e.target.result);

        _const.DOM.divCircle.className = "";
        _const.DOM.labelDropHere.classList.add("masked");
        _const.DOM.divCircleProgress.classList.remove("masked");
        _const.DOM.circlePercent.classList.remove("masked");
        _const.DOM.divCircleProgress.style.backgroundImage = 'url(\'' + e.target.result + '\')';
    };
}

_const.DOM.divDropzone.addEventListener('change', handleFileSelect, false);

_const.DOM.divDropzone.addEventListener("dragenter", function (event) {
    _const.DOM.divCircle.classList.add("hover");
});

_const.DOM.divDropzone.addEventListener("dragleave", function (event) {
    _const.DOM.divCircle.classList.remove("hover");
});

},{"./const":1,"./recognize":5}],4:[function(require,module,exports){
'use strict';

require('./dropzone');

},{"./dropzone":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = recognize;

var _const = require('./const');

var _result = require('./result');

var _result2 = _interopRequireDefault(_result);

var _drawCircle = require('./drawCircle');

var _drawCircle2 = _interopRequireDefault(_drawCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function recognize(image) {
    var bool = false;

    Tesseract.recognize(image).progress(function (p) {
        if (!bool) {
            bool = p.status == "recognizing text";
            (0, _drawCircle2.default)(0);
        } else {
            (0, _drawCircle2.default)(p.progress * 100);
            _const.DOM.circlePercent.innerHTML = parseInt(p.progress * 100) + "%";
        }
    }).then(function (result) {
        result.lines.map(function (line) {
            var pContent = line.words.reduce(function (old, actual) {
                return old + adStyleToElement(actual);
            }, "");

            var p = document.createElement("p");
            p.innerHTML = pContent;

            _const.DOM.divResultContent.appendChild(p);
        });

        (0, _result2.default)();
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

},{"./const":1,"./drawCircle":2,"./result":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    _const.DOM.divResult.className = "";
    _const.DOM.divContainerCircle.className = "masked";
};

var _const = require("./const");

},{"./const":1}]},{},[4]);
