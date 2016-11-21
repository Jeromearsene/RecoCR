(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
    divResult: document.getElementById('result'),
    divDropzone: document.getElementById('dropzone'),
    divCircle: document.getElementById('circle'),
    divContainerCircle: document.getElementById('container-circle'),
    divResultContent: document.getElementById('resultContent'),
    divCircleProgress: document.getElementById('circle-progress'),
    labelDropHere: document.getElementById('dropHere-label'),
    circlePercent: document.getElementById('percent-circle'),
    menu: document.getElementById('menu'),
    popupMenu: document.getElementById('popup-menu'),
    counterContent: document.getElementById('counter-content')
};

},{}],2:[function(require,module,exports){
'use strict';

var DOM = require('./global/const');
var datas = require('./../language.json');

var language = datas[navigator.language] ? navigator.language : 'en';

console.log(language);

insertDataInDOM('labelDropHere');

function insertDataInDOM(element) {
    DOM[element].innerHTML = datas[language][element];
}

},{"./../language.json":3,"./global/const":1}],3:[function(require,module,exports){
module.exports={
  "fr":{
    "labelDropHere": "Glisser une image ou cliquez ici",
    "menu": {
      "Compte": "aze",
      "Don": "qsd",
      "Paramètres": "wxc",
      "A propos": "iop"
    }
  },
  "en":{
    "labelDropHere": "Drop or click here",
    "menu": {
      "Compte": "aze",
      "Don": "qsd",
      "Paramètres": "wxc",
      "A propos": "iop"
    }
  }
}
},{}]},{},[2]);
