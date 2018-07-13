// deuteranomaly

var stylingID = document.getElementById('colorblind-styling');
var filterID = document.getElementById('colorblind-filters');

stylingID = document.createElement('style');
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranomaly"> <feColorMatrix type="matrix" values="0.8,0.2,0,0,0 0.258,0.742,0,0,0 0,0.142,0.858,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
document.body.appendChild(filterID);

stylingID.innerHTML = 'body{-webkit-filter:url(#deuteranomaly);-moz-filter:(#deuteranomaly);-ms-filter:(#deuteranomaly);-o-filter:(#deuteranomaly);filter:(#deuteranomaly);}'
