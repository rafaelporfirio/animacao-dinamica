var contador1 = 0;
var contador2 = 0;
var letrasGeradas1, letrasGeradas2;
var criaElementoStyle = document.createElement("style"),
    elementoStyle;

document.head.appendChild(criaElementoStyle);

var intervalo1 = setInterval(function() {

    contador1++;
    letrasGeradas1 = document.getElementById("texto" + contador1);
    letrasGeradas1.style.backgroundImage = "url(" + contador1 + ".png" + ")";
    letrasGeradas1.style.animation = "texto" + contador1 + " 15s ease 0s 1 normal forwards";
    elementoStyle = document.styleSheets[0];
    elementoStyle.insertRule("@keyframes texto" + contador1 + "{ 0% {background-position: 0px 25px;} 2% {background-position: 0px 0px;} 20% {background-position: 0px 0px;} 22% {background-position: 0px 25px;} 100% {background-position: 0px 25px;} }");
    elementoStyle.insertRule("@-webkit-keyframes texto" + contador1 + "{ 0% {background-position: 0px 25px;} 2% {background-position: 0px 0px;} 20% {background-position: 0px 25px;} 22% {background-position: 0px 25px;} 100% {background-position: 0px 25px;} }");

    if (contador1 == 3) {
        paraAnimacao();
    }
}, 100);

function paraAnimacao() {

    clearInterval(intervalo1);
}

function delayAnimacao() {
    setTimeout(function() {
        continuaAnimacao();
    }, 3500);
}

delayAnimacao();

function continuaAnimacao() {

    var intervalo2 = setInterval(function() {
        contador2++;
        letrasGeradas2 = document.getElementById("texto" + contador2);
        letrasGeradas2.style.backgroundImage = "url(" + contador2 + ".png" + ")";
        letrasGeradas2.style.animation = "texto" + contador2 + " 15s ease 0s normal forwards";
        elementoStyle = document.styleSheets[0];
        elementoStyle.insertRule("@keyframes texto" + contador2 + "{ 0% { background-position: 0px 25px; } 2% { background-position: 0px 0px; } 20% { background-position: 0px 0px; } 22% { background-position: 0px 25px; } 100% { background-position: 0px 25px; }}");
        elementoStyle.insertRule("@-webkit-keyframes texto" + contador2 + "{ 0% { background-position: 0px 25px; } 2% { background-position: 0px 0px; } 20% { background-position: 0px 0px; } 22% { background-position: 0px 25px; } 100% { background-position: 0px 25px; }}");

        if (contador2 == 6) {
            paraAnimacao2();
        }

    }, 100);

    function paraAnimacao2() {
        clearInterval(intervalo2);
    }
}