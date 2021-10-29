// deuteranomaly

if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
}
stylingID = document.createElement('style');
stylingID.id = "styleID612481";
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.id = "filterID471924";
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filterID);

filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranomaly" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.57418,0.42582,-0.00000,0,0 0.17418,0.82582,-0.00000,0,0 -0.01318,0.01318,1.00000,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranomaly);-moz-filter:(#deuteranomaly);-ms-filter:(#deuteranomaly);-o-filter:(#deuteranomaly);filter:(#deuteranomaly);}'
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);