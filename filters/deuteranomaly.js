// deuteranomaly

if (document.getElementById("test")) {
    stylingID = document.getElementById("test").remove();
    filterID = document.getElementById("test1").remove();
}
stylingID = document.createElement('style');
stylingID.id = "test";
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.id = "test1";
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filterID);

filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranomaly"> <feColorMatrix type="matrix" values="0.8,0.2,0,0,0 0.258,0.742,0,0,0 0,0.142,0.858,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'body{-webkit-filter:url(#deuteranomaly);-moz-filter:(#deuteranomaly);-ms-filter:(#deuteranomaly);-o-filter:(#deuteranomaly);filter:(#deuteranomaly);}'
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);