// achromatomaly
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

filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'body{-webkit-filter:url(#achromatomaly);-moz-filter:(#achromatomaly);-ms-filter:(#achromatomaly);-o-filter:(#achromatomaly);filter:(#achromatomaly);}'
window.scrollBy(0, 1);
window.scrollBy(0, -1);