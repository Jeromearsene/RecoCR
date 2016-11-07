import {DOM} from './const';

DOM.menu.addEventListener('click', () =>
{
    if(DOM.menu.className == "open")
    {
        DOM.menu.className = ""
        DOM.popupMenu.className = "masked"
    }

    else
    {
        DOM.menu.className = "open"
        DOM.popupMenu.className = ""
    }
})