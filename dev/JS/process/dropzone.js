const recognize = require ('./recognize');
const DOM = require('./../global/const')

function handleFileSelect(evt)
{
    DOM.divDropzone.className = "masked";
    DOM.divCircle.className = "";
    DOM.labelDropHere.classList.add("masked");
    DOM.divCircleProgress.classList.remove("masked");
    DOM.circlePercent.classList.remove("masked");

    let file = evt.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function(e)
    {
        DOM.divCircleProgress.style.backgroundImage = `url('${e.target.result}')`;
        recognize(e.target.result)
    }
}



DOM.divDropzone.addEventListener('change', handleFileSelect, false);

DOM.divDropzone.addEventListener("dragenter", function( event ) {
    DOM.divCircle.classList.add("hover");
});

DOM.divDropzone.addEventListener("dragleave", function( event ) {
    DOM.divCircle.classList.remove("hover");
});
