const DOM = require('./global/DOM')
const datas = require('./../languages.json')

const language = datas[navigator.language] ? navigator.language : 'en';

insertDataInDOM('dropHereLabel')

function insertDataInDOM(element)
{
    DOM[element].innerHTML = datas[language][element];
}
