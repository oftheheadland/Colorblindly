// text to speech

var synth = window.speechSynthesis

function texttospeech() {
    //inject script into page
    chrome.tabs.executeScript({
        file: 'script/play.js'
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




