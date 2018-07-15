function checkContrast(rgb){

    

    var contrast = (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000;

    return (contrast >= 128) ? 'black' : 'white';
}


function colorcontrast (rgb) {
    var color = {};

    color.contrast = function(rgb) {
        // check if we are receiving an element or element background-color
        if (rgb instanceof jQuery) {
            // get element background-color
            rgb = rgb.css('background-color');
        } else if (typeof rgb !== 'string') {
            return;
        }

        // Strip everything except the integers eg. "rgb(" and ")" and " "
        rgb = rgb.split(/\(([^)]+)\)/)[1].replace(/ /g, '');

        // map RGB values to variables
        var r = parseInt(rgb.split(',')[0], 10),
            g = parseInt(rgb.split(',')[1], 10),
            b = parseInt(rgb.split(',')[2], 10),
            a;

        // if RGBA, map alpha to variable (not currently in use)
        if (rgb.split(',')[3] !== null) {
            a = parseInt(rgb.split(',')[3], 10);
        }

        // calculate contrast of color (standard grayscale algorithmic formula)
        var contrast = (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000;

        return (contrast >= 128) ? 'black' : 'white';
    };

    // Return public interface
    return color;

};