const DOM = require('./global/const')
const datas = require('./../language.json')

const language = datas[navigator.language] ? navigator.language : 'en';

console.log(language);

insertDataInDOM('labelDropHere')

function insertDataInDOM(element)
{
    DOM[element].innerHTML = datas[language][element];
}