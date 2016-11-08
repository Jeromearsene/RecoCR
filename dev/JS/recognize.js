import {DOM} from './const';
import displayResult from './result';
import drawCircle from './drawCircle';


export default function recognize(image)
{
    var Tesseract = require('tesseract.js');

    let bool = false;

    Tesseract.recognize(image)
        .progress(function (p)
        {
            if (!bool)
            {
                bool = (p.status == "recognizing text");
                drawCircle(0);
            }

            else
            {
                drawCircle(p.progress*100);
                DOM.circlePercent.innerHTML = parseInt(p.progress*100 )+ "%";
            }

        })
        .then(function (result)
        {
            ipcRenderer.send("loadNewImage");

            result.lines.map((line) =>
            {
                let pContent = line.words.reduce((old, actual) => old + adStyleToElement(actual), "");

                let p = document.createElement("p");
                p.innerHTML = pContent;

                DOM.divResultContent.appendChild(p);
            });

            displayResult();
        })

    function adStyleToElement(e)
    {
        let result = `${e.text} `;

        /*if (e.is_bold)
            result = `<b>${result}</b>`
        if (e.is_italic)
            result = `<i>${result}</i>`*/

        return result
    }
}