/*jslint browser:true */
/*
    Stole this guy below - Credits to the first Google result: http://www.switchonthecode.com/tutorials/javascript-tutorial-simple-fade-animation 
*/
var TimeToFade = 1000.0;

function fade(eid) {
    "use strict";
    var element = document.getElementById(eid);
    if (element === null) {
        return;
    }
    if (element.FadeState === undefined) {
        if (element.style.opacity === null
                || element.style.opacity === ''
                || element.style.opacity === '1') {
            element.FadeState = 2;
        } else {
            element.FadeState = -2;
        }
    }

    if (element.FadeState === 1 || element.FadeState === -1) {
        element.FadeState = element.FadeState === 1 ? -1 : 1;
        element.FadeTimeLeft = TimeToFade - element.FadeTimeLeft;
    } else {
        element.FadeState = element.FadeState === 2 ? -1 : 1;
        element.FadeTimeLeft = TimeToFade;
        setTimeout("animateFade(" + new Date().getTime() + ",'" + eid + "')", 33);
    }
}
function animateFade(lastTick, eid) {
    "use strict";
    var curTick = new Date().getTime(),
        elapsedTicks = curTick - lastTick,
        element = document.getElementById(eid),
        newOpVal;
    if (element.FadeTimeLeft <= elapsedTicks) {
        element.style.opacity = element.FadeState === 1 ? '1' : '0';
        element.style.filter = 'alpha(opacity = '
            + (element.FadeState === 1 ? '100' : '0') + ')';
        element.FadeState = element.FadeState === 1 ? 2 : -2;
        return;
    }
    element.FadeTimeLeft -= elapsedTicks;
    newOpVal = element.FadeTimeLeft / TimeToFade;
    if (element.FadeState === 1) {
        newOpVal = 1 - newOpVal;
    }
    element.style.opacity = newOpVal;
    element.style.filter = 'alpha(opacity = ' + (newOpVal * 100) + ')';
    setTimeout("animateFade(" + curTick + ",'" + eid + "')", 33);
}
/* End Animation Script */
/*
    Remove the landing div and resize our terminal
*/
function removeDiv() {
    "use strict";
    setTimeout(document.getElementById('parentDiv').removeChild(document.getElementById('choosePath')), 1500);
    setTimeout(document.getElementById('terminal').style.height = 800, 1700);
}
/*
    Add to the terminal div
*/
function addInput(x) {
    "use strict";
    document.getElementById('terminal').innerHTML = document.getElementById('terminal').innerHTML + x;
}
/*
    Loading animation
*/
function loadPage() {
    "use strict";
    addInput("</br>");
    setTimeout(fade('terminal'), 500);
    setTimeout(fade('choosePath'), 500);
}
