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

window.onbeforeunload = function(){
    synth.cancel();
  };

document.getElementById("playaudiobutton").addEventListener("click", function () {
    texttospeech();
});

document.getElementById("stopaudiobutton").addEventListener("click", function () {
    stopAudio();
});

// document.getElementById("pauseaudiobutton").addEventListener("click", function () {
//     console.log("pausing")
//     synth.pause();
// });

// document.getElementById("resumeaudiobutton").addEventListener("click", function () {
//     console.log("resuming")
//     synth.resume();
// });



