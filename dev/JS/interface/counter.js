const DOM = require('./../global/const')

ipcRenderer.on('counter', (event, counter) => {
    DOM.counterContent.innerHTML = `${counter}/5`;
})