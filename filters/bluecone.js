// bluecone

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

filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="bluecone" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.01776,0.10947,0.87278,0,0 0.01776,0.10947,0.87278,0,0 0.01776,0.10947,0.87278,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#bluecone);-moz-filter:(#bluecone);-ms-filter:(#bluecone);-o-filter:(#bluecone);filter:(#bluecone);}'
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);