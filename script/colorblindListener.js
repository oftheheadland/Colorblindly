//Listeners for colorblind filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

//achromatomaly
document.getElementById("radio-1").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/achromatomaly.js'
    });
});

//achromatopsia
document.getElementById("radio-2").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/achromatopsia.js'
    });
});

//deuteranomaly
document.getElementById("radio-3").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/deuteranomaly.js'
    });
});

//deuteranopia
document.getElementById("radio-4").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/deuteranopia.js'
    });
});

//protanomaly
document.getElementById("radio-5").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/protanomaly.js'
    });
});

//protanopia
document.getElementById("radio-6").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/protanopia.js'
    });
});

//tritanomaly
document.getElementById("radio-7").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/tritanomaly.js'
    });
});

//tritanopia
document.getElementById("radio-8").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/tritanopia.js'
    });
});

//normal
document.getElementById("radio-9").addEventListener("click", function () {
    chrome.tabs.executeScript({
        file: 'filters/normal.js'
    });
});