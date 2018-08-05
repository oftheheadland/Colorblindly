function checkContrast(rgb){

    

    var contrast = (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000;

    return (contrast >= 128) ? 'black' : 'white';
}


//console.log(getContrast50("ffffff"))

function getContrast50(hexcolor){
    return (parseInt(hexcolor, 16) > 0xffffff/2) ? 'black':'white';
}
