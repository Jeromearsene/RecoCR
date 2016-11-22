(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var DOMElementsName = ['result', 'dropzone', 'circle', 'containerCircle', 'resultContent', 'circleProgress', 'dropHereLabel', 'circlePercent', 'menu', 'popupMenu', 'counterContent'];

module.exports = DOMElementsName.reduce(function (acc, elementName) {
    acc[elementName] = document.getElementById(elementName);
    return acc;
}, Object.create(null));

},{}],2:[function(require,module,exports){
'use strict';

var DOM = require('./global/DOM');
var datas = require('./../languages.json');

var language = datas[navigator.language] ? navigator.language : 'en';

insertDataInDOM('dropHereLabel');

function insertDataInDOM(element) {
    DOM[element].innerHTML = datas[language][element];
}

},{"./../languages.json":3,"./global/DOM":1}],3:[function(require,module,exports){
module.exports={
  "fr":{
    "dropHereLabel": "Déposez une image ou cliquez ici",
    "menu": {
      "Compte": "aze",
      "Don": "qsd",
      "Paramètres": "wxc",
      "A propos": "iop"
    }
  },
  "en":{
    "dropHereLabel": "Drop or click here",
    "menu": {
      "Compte": "aze",
      "Don": "qsd",
      "Paramètres": "wxc",
      "A propos": "iop"
    }
  }
}
},{}]},{},[2]);
