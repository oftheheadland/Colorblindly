
(function() {

	// check if elements have been created already
    var stylingID = document.getElementById('colorblind-styling');
    var filterID = document.getElementById('colorblind-filters');

	// if elements haven't been created yet, (first run)
    if (!stylingID) {
        stylingID = document.createElement('style');
        document.body.appendChild(stylingID);
    }
    if (!filterID) {
        filterID = document.createElement('div');
        filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
        filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanopia"> <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0 0.242,0.758,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="protanomaly"> <feColorMatrix type="matrix" values="0.817,0.183,0,0,0 0.333,0.667,0,0,0 0,0.125,0.875,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="deuteranomaly"> <feColorMatrix type="matrix" values="0.8,0.2,0,0,0 0.258,0.742,0,0,0 0,0.142,0.858,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="tritanopia"> <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="tritanomaly"> <feColorMatrix type="matrix" values="0.967,0.033,0,0,0 0,0.733,0.267,0,0 0,0.183,0.817,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="achromatopsia"> <feColorMatrix type="matrix" values="0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
        document.body.appendChild(filterID);
        //console.log(filterID)
    }

	// list of blindness types
    var blindnessList = [ "protanopia", "protanomaly", "deuteranopia", "deuteranomaly", "tritanopia", "tritanomaly", "achromatopsia", "achromatomaly" ];
	var str = '';
	
	// create list of options
    for (var i in blindnessList)
        str += (parseInt(i)+1) + ': ' + blindnessList[i] + '; ';

	// get user input
    var userInput = parseInt(prompt('0: off; ' + str)) - 1;
	
	
	if (isNaN(userInput)) return;
    if (userInput >= blindnessList.length) return;
    if (userInput == -1) {
        stylingID.innerHTML = 'body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
        return;
    }
    userInput = blindnessList[userInput];
    if (document.getElementById(userInput)) {
        stylingID.innerHTML = 'body{-webkit-filter:!!;-moz-filter:!!;-ms-filter:!!;-o-filter:!!;filter:!!;}'.replace(/!!/g,'url(#'+userInput+')');
        console.log(stylingID.innerHTML)
        console.log(userInput)
    }
    else
        stylingID.innerHTML = 'body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';

    
})();