// ini File js

function convertCtoF() {
    var celsiusInput = parseFloat(document.getElementById("c-to-f-input").value);
    var fahrenheitOutput = (celsiusInput * 9/5) + 32;
    document.getElementById("c-to-f-output").value = fahrenheitOutput.toFixed(2);
}

function convertFtoC() {
    var fahrenheitInput = parseFloat(document.getElementById("f-to-c-input").value);
    var celsiusOutput = (fahrenheitInput - 32) / 1.8;
    document.getElementById("f-to-c-output").value = celsiusOutput.toFixed(2);
}

function reverseConversion() {
    var celsiusInput = parseFloat(document.getElementById("c-to-f-input").value);
    var fahrenheitInput = parseFloat(document.getElementById("f-to-c-input").value);

    if (!isNaN(celsiusInput)) {
        convertCtoF();
    } else if (!isNaN(fahrenheitInput)) {
        convertFtoC();
    }
}
