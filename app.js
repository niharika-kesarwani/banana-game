var btnTranslate=document.querySelector('#button');
var txtInput=document.querySelector("#input");

function clickHandler() {
    console.log(txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler)