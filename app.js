var btnTranslate = document.querySelector('#button');
var txtInput = document.querySelector("#input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getURL(text) {
    return serverURL + "?text=" + text
}

function clickHandler() {

    var input = txtInput.value;

    fetch(getURL(input))
        .then(response => response.json())
        .then(json => {
            txtOutput.innerText = json.contents.translated;
        })

}

btnTranslate.addEventListener("click", clickHandler)