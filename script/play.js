//script to be injected
//for reference on voices/pitch/speed: https://github.com/mdn/web-speech-api


//text = document.body.textContent || document.body.innerText;
text = document.body.innerText
var msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);
