//Listeners for colorblind filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

/**
 * get the selected filter on popup open
 */
window.onload = function () {
    chrome.storage.local.get(['key'], function (result) {
        try {
            document.getElementById(result.key).click();
        }
        catch (e) {
            console.log(e)
        }
    });
}

/**
 * Sets the selected filter in storage
 * @param {String} value the selected input 
 */
function setSelected(value) {
    try {
        chrome.storage.local.set({ 'key': value }, function () {
            document.getElementById(value).checked = true;
        });
    }
    catch{ }
}

function injectFilter(fileName) {
    chrome.tabs.executeScript({ file: fileName });
}

//normal
document.getElementById("radio-0").addEventListener("click", function () {
    setSelected('radio-0');
    injectFilter('filters/normal.js');

});

//achromatomaly
document.getElementById("radio-1").addEventListener("click", function () {
    setSelected('radio-1');
    injectFilter('filters/achromatomaly.js');

});

//achromatopsia
document.getElementById("radio-2").addEventListener("click", function () {
    setSelected('radio-2');
    injectFilter('filters/achromatopsia.js');

});

//deuteranomaly
document.getElementById("radio-3").addEventListener("click", function () {
    setSelected('radio-3');
    injectFilter('filters/deuteranomaly.js');

});

//deuteranopia
document.getElementById("radio-4").addEventListener("click", function () {
    setSelected('radio-4');
    injectFilter('filters/deuteranopia.js');
});

//protanomaly
document.getElementById("radio-5").addEventListener("click", function () {
    setSelected('radio-5');
    injectFilter('filters/protanomaly.js');
});

//protanopia
document.getElementById("radio-6").addEventListener("click", function () {
    setSelected('radio-6');
    injectFilter('filters/protanopia.js');
});

//tritanomaly
document.getElementById("radio-7").addEventListener("click", function () {
    setSelected('radio-7');
    injectFilter('filters/tritanomaly.js');
});

//tritanopia
document.getElementById("radio-8").addEventListener("click", function () {
    setSelected('radio-8');
    injectFilter('filters/tritanopia.js');
});
