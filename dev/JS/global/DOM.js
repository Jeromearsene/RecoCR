const DOMElementsName = ['result', 'dropzone', 'circle', 'containerCircle', 'resultContent', 'circleProgress',
                                    'dropHereLabel', 'circlePercent', 'menu', 'popupMenu', 'counterContent'];

module.exports = DOMElementsName.reduce((acc, elementName) => {
    acc[elementName] = document.getElementById(elementName)
    return acc
}, Object.create(null))