// tritanopia

var stylingID = document.getElementById('colorblind-styling');
var filterID = document.getElementById('colorblind-filters');

stylingID = document.createElement('style');
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanopia"> <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
document.body.appendChild(filterID);

stylingID.innerHTML = 'body{-webkit-filter:url(#tritanopia);-moz-filter:(#tritanopia);-ms-filter:(#tritanopia);-o-filter:(#tritanopia);filter:(#tritanopia);}'
