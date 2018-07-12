//script to be injected

text = document.body.textContent || document.body.innerText;
var msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);
