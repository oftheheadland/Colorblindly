// this is the code which will be injected into a given page...

(function() {

//todo:make a stylesheet that force changes body, font, font-color/size


// loop through all dom elements
var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here
}
console.log("all: ")
console.log(all)


// text to speech

var msg = new SpeechSynthesisUtterance('Hello World');
window.speechSynthesis.speak(msg);



// colorblind mode
	(function () {
		var body = document.body;
		body.style['filter'] = 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)';
		if (!body.style['filter']) {
		  body.style['-webkit-filter'] = 'grayscale(1)';
		  body.style['filter'] = 'grayscale(1)';
		}
	  }());



//test div 

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	
	//alert('inserted self..');

})();