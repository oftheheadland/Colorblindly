// grayscale

var stylingID = document.getElementById('colorblind-styling');
stylingID = document.createElement('style');
document.body.appendChild(stylingID);

stylingID.innerHTML = 'body{-webkit-filter:grayscale(1);-moz-filter:grayscale(1);-ms-filter:grayscale(1);-o-filter:grayscale(1);filter:grayscale(1);}';
window.scrollBy(0, 1);
window.scrollBy(0, -1);