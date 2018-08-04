// protanomaly

if (document.getElementById("test")) {
    stylingID = document.getElementById("test").remove();
    filterID = document.getElementById("test1").remove();

    stylingID = document.createElement('style');
    stylingID.id = "test";
    document.body.appendChild(stylingID);

    filterID = document.createElement('div');
    filterID.id = "test1";
    filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
    document.body.appendChild(filterID);
} else {
    stylingID = document.createElement('style');
    stylingID.id = "test";
    document.body.appendChild(stylingID);

    filterID = document.createElement('div');
    filterID.id = "test1";
    filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
    document.body.appendChild(filterID);
}

stylingID = document.getElementById("test");
filterID = document.getElementById("test1");

filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanomaly"> <feColorMatrix type="matrix" values="0.817,0.183,0,0,0 0.333,0.667,0,0,0 0,0.125,0.875,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'body{-webkit-filter:url(#protanomaly);-moz-filter:(#protanomaly);-ms-filter:(#protanomaly);-o-filter:(#protanomaly);filter:(#protanomaly);}'
window.scrollBy(0, 1);
window.scrollBy(0, -1);