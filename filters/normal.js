// normal

var stylingID = document.getElementById('colorblind-styling');
stylingID = document.createElement('style');
document.body.appendChild(stylingID);

stylingID.innerHTML = 'body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
