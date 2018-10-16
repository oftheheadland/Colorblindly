//Listeners for colorblind filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

/**
 * get the selected filter on popup open
 */
window.onload = function () {
    chrome.storage.local.get(['key'], function (result) {
        document.getElementById(result.key).checked = true;
    });
}

/**
 * Sets the selected filter in storage
 * @param {String} value the selected input 
 */
function setSelected(value) {
    chrome.storage.local.set({ 'key': value }, function () {
        document.getElementById(value).checked = true;
    });
}

//achromatomaly
document.getElementById("radio-1").addEventListener("click", function () {
    setSelected('radio-1');
    chrome.tabs.executeScript({
        file: 'filters/achromatomaly.js'
    });
});

//achromatopsia
document.getElementById("radio-2").addEventListener("click", function () {
    setSelected('radio-2');
    chrome.tabs.executeScript({
        file: 'filters/achromatopsia.js'
    });
});

//deuteranomaly
document.getElementById("radio-3").addEventListener("click", function () {
    setSelected('radio-3');
    chrome.tabs.executeScript({
        file: 'filters/deuteranomaly.js'
    });
});

//deuteranopia
document.getElementById("radio-4").addEventListener("click", function () {
    setSelected('radio-4');
    chrome.tabs.executeScript({
        file: 'filters/deuteranopia.js'
    });
});

//protanomaly
document.getElementById("radio-5").addEventListener("click", function () {
    setSelected('radio-5');
    chrome.tabs.executeScript({
        file: 'filters/protanomaly.js'
    });
});

//protanopia
document.getElementById("radio-6").addEventListener("click", function () {
    setSelected('radio-5');
    chrome.tabs.executeScript({
        file: 'filters/protanopia.js'
    });
});

//tritanomaly
document.getElementById("radio-7").addEventListener("click", function () {
    setSelected('radio-8');
    chrome.tabs.executeScript({
        file: 'filters/tritanomaly.js'
    });
});

//tritanopia
document.getElementById("radio-8").addEventListener("click", function () {
    setSelected('radio-8');
    chrome.tabs.executeScript({
        file: 'filters/tritanopia.js'
    });
});

//normal
document.getElementById("radio-9").addEventListener("click", function () {
    setSelected('radio-9');
    chrome.tabs.executeScript({
        file: 'filters/normal.js'
    });
});