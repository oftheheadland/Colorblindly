// normal

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

stylingID.innerHTML = 'body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);