const DOM = require('./../global/DOM')
const displayResult = require('./result');
const drawCircle = require('./drawCircle');

function recognize(image)
{
    let bool = false;

    Tesseract.recognize(image)
        .progress(function (p)
        {
            console.log(p);
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
            result.lines.map((line) =>
            {
                let pContent = line.words.reduce((old, actual) => old + adStyleToElement(actual), "");

                let p = document.createElement("p");
                p.innerHTML = pContent;

                DOM.resultContent.appendChild(p);
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

module.exports = recognize