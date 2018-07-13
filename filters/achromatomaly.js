// achromatomaly

var stylingID = document.getElementById('colorblind-styling');
var filterID = document.getElementById('colorblind-filters');

stylingID = document.createElement('style');
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
document.body.appendChild(filterID);

stylingID.innerHTML = 'body{-webkit-filter:url(#achromatomaly);-moz-filter:(#achromatomaly);-ms-filter:(#achromatomaly);-o-filter:(#achromatomaly);filter:(#achromatomaly);}'
