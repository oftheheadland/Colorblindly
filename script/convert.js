function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}





document.getElementById("toHex").addEventListener("click", function () {
    var r = document.getElementById("r-input").value;
    var g = document.getElementById("g-input").value;
    var b = document.getElementById("b-input").value;
    r = parseInt(r)
    g = parseInt(g)
    b = parseInt(b)


    document.getElementById("hex").value = rgbToHex(r, g, b)

});

document.getElementById("toRGB").addEventListener("click", function () {
    var hexcode = document.getElementById("hex").value;
    result = hexToRgb(hexcode)
    document.getElementById("r-input").value = result.r
    document.getElementById("g-input").value = result.g
    document.getElementById("b-input").value = result.b


});




$('#convertform').submit(function () {
    return false;
   });