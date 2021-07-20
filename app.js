var btnTranslate=document.querySelector('#button');
var txtInput=document.querySelector("#input");
var txtOutput=document.querySelector("#output");

function clickHandler() {
    txtOutput.innerText = txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler)