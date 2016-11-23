const recognize = require ('./recognize');
const DOM = require('./../global/DOM')


DOM.dropzone.ondrop = (e) =>
{
    e.preventDefault();

    for (let f of e.dataTransfer.files) {
        DOM.circle.className = "";
        DOM.dropzone.classList.add("masked");
        DOM.dropHereLabel.classList.add("masked");
        DOM.circleProgress.classList.remove("masked");
        DOM.circlePercent.classList.remove("masked");

        DOM.circleProgress.style.backgroundImage = `url('${f.path}')`;
        recognize(f.path)
    }
}

DOM.dropzone.addEventListener("dragenter", function( event ) {
    DOM.circle.classList.add("hover");
});

DOM.dropzone.addEventListener("dragleave", function( event ) {
    DOM.circle.classList.remove("hover");
});
