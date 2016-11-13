//import {DOM} from './const';
const DOM = require('./../global/const')

var emptyColor = "white"
var loadColor = "#6699f6"

var lDegree = 90;
var lColor = emptyColor;
var rDegree = 90;
var rColor = loadColor;

var lGradient = `linear-gradient(${lDegree}deg, ${lColor} 50%, ${rColor} 50%, ${rColor}),`;
var rGradient = `linear-gradient(${rDegree}deg, ${lColor} 50%, ${rColor} 50%, ${rColor});`;

var ratio = 3.6;


function drawCircle(progressPercent)
{
    if (progressPercent < 50)
    {
        rDegree = (progressPercent * ratio)-90;
    }

    else
    {
        lColor = loadColor;
        rColor = emptyColor;
        lDegree = -90;
        rDegree = ((progressPercent - 50) * ratio) - 90;
    }

    lGradient = `linear-gradient(${lDegree}deg, ${lColor} 50%, transparent 50%, transparent),`;
    rGradient = `linear-gradient(${rDegree}deg, ${lColor} 50%, ${rColor} 50%, ${rColor})`;

    DOM.divCircle.style.backgroundImage = lGradient + rGradient;
}


// function testCircle(i)
// {
//         setTimeout(function ()
//         {
//             drawCircle(i);
//             let newI = i+1;
//             if(i<100)
//                 testCircle(newI);
//         }, 50);
//
// }


module.exports = drawCircle