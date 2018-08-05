//script to be injected
//for reference on voices/pitch/speed: https://github.com/mdn/web-speech-api


// loop through all dom elements
// var all = document.getElementsByTagName("*");

// for (var i=0, max=all.length; i < max; i++) {
//      // Do something with the element here
// }
// console.log("all: ")
// console.log(all)


text = document.body.innerText
var msg = new SpeechSynthesisUtterance(text);


//msg.pitch = 2;
//msg.rate = 2;
//console.log(window.speechSynthesis.getVoices())

window.speechSynthesis.speak(msg);
