//Listeners for colorblind filter buttons
//Injects a javascript file on click event

//achromatomaly
document.getElementById("radio-1").addEventListener("click", function () {
    injectAchromatomaly();
});


function injectAchromatomaly() {
    chrome.tabs.executeScript({
        file: 'filters/achromatomaly.js'
    });
}


//achromatopsia
document.getElementById("radio-2").addEventListener("click", function () {
    injectAchromatopsia();
});

function injectAchromatopsia() {
    chrome.tabs.executeScript({
        file: 'filters/achromatopsia.js'
    });
}


//deuteranomaly
document.getElementById("radio-3").addEventListener("click", function () {
    injectDeuteranomaly();
});

function injectDeuteranomaly() {
    chrome.tabs.executeScript({
        file: 'filters/deuteranomaly.js'
    });
}


//deuteranopia
document.getElementById("radio-4").addEventListener("click", function () {
    injectDeuteranopia();
});

function injectDeuteranopia() {
    chrome.tabs.executeScript({
        file: 'filters/deuteranopia.js'
    });
}


//protanomaly
document.getElementById("radio-5").addEventListener("click", function () {
    injectProtanomaly();
});

function injectProtanomaly() {
    chrome.tabs.executeScript({
        file: 'filters/protanomaly.js'
    });
}


//protanopia
document.getElementById("radio-6").addEventListener("click", function () {
    injectProtanopia();
});

function injectProtanopia() {
    chrome.tabs.executeScript({
        file: 'filters/protanopia.js'
    });
}


//tritanomaly
document.getElementById("radio-7").addEventListener("click", function () {
    injectTritanomaly();
});

function injectTritanomaly() {
    chrome.tabs.executeScript({
        file: 'filters/tritanomaly.js'
    });
}


//tritanopia
document.getElementById("radio-8").addEventListener("click", function () {
    injectTritanopia();
});

function injectTritanopia() {
    chrome.tabs.executeScript({
        file: 'filters/tritanopia.js'
    });
}


//normal
document.getElementById("radio-9").addEventListener("click", function () {
    injectNormal();
});

function injectNormal() {
    chrome.tabs.executeScript({
        file: 'filters/normal.js'
    });
}


//grayscale
// document.getElementById("radio-10").addEventListener("click", function () {
//     injectGrayscale();
// });

function injectGrayscale() {
    chrome.tabs.executeScript({
        file: 'filters/grayscale.js'
    });
}
