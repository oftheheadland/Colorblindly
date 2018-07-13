// protanomaly

var stylingID = document.getElementById('colorblind-styling');
var filterID = document.getElementById('colorblind-filters');

stylingID = document.createElement('style');
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanomaly"> <feColorMatrix type="matrix" values="0.817,0.183,0,0,0 0.333,0.667,0,0,0 0,0.125,0.875,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
document.body.appendChild(filterID);

stylingID.innerHTML = 'body{-webkit-filter:url(#protanomaly);-moz-filter:(#protanomaly);-ms-filter:(#protanomaly);-o-filter:(#protanomaly);filter:(#protanomaly);}'
