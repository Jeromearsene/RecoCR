const DOM = require('./../global/DOM')

ipcRenderer.on('counter', (event, counter) => {
    DOM.counterContent.innerHTML = `${counter}/5`;
})