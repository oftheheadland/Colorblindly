// text to speech

var synth = window.speechSynthesis

function texttospeech() {
    //inject script into page
    chrome.tabs.executeScript({
        file: 'play.js'
    });


}

function stopAudio() {
    synth.cancel();
}

document.getElementById("audiobutton").addEventListener("click", function () {
    texttospeech();
});

document.getElementById("stopaudiobutton").addEventListener("click", function () {
    stopAudio();
});




//temp colorblind listener
// will need like 8 different js files but whatever
// will probably need a new JS function, this one is tricky to not use input. ponder it

document.getElementById("colorblindbutton").addEventListener("click", function () {
    injectcolorblind();
});


function injectcolorblind() {
    //inject script into page
    chrome.tabs.executeScript({
        file: 'colorblind.js'
    });


}