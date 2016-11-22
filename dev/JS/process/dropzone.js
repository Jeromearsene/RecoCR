const recognize = require ('./recognize');
const DOM = require('./../global/DOM')

function handleFileSelect(evt)
{
    DOM.dropzone.className = "masked";
    DOM.circle.className = "";
    DOM.dropHereLabel.classList.add("masked");
    DOM.circleProgress.classList.remove("masked");
    DOM.circlePercent.classList.remove("masked");

    let file = evt.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function(e)
    {
        DOM.circleProgress.style.backgroundImage = `url('${e.target.result}')`;
        recognize(e.target.result)
    }
}



DOM.dropzone.addEventListener('change', handleFileSelect, false);

DOM.dropzone.addEventListener("dragenter", function( event ) {
    DOM.circle.classList.add("hover");
});

DOM.dropzone.addEventListener("dragleave", function( event ) {
    DOM.circle.classList.remove("hover");
});
