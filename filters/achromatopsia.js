// achromatopsia

var stylingID = document.getElementById('colorblind-styling');
var filterID = document.getElementById('colorblind-filters');

stylingID = document.createElement('style');
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatopsia"> <feColorMatrix type="matrix" values="0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter>  </defs> </svg>';
document.body.appendChild(filterID);

stylingID.innerHTML = 'body{-webkit-filter:url(#achromatopsia);-moz-filter:(#achromatopsia);-ms-filter:(#achromatopsia);-o-filter:(#achromatopsia);filter:(#achromatopsia);}'
