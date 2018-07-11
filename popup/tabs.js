
function changeTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // toggle tabs
    if (evt.currentTarget.id == lastSelected) {
        lastSelected = ""
    }
    else{
        lastSelected = evt.currentTarget.id

        // set current tab to active
        document.getElementById(tabName).style.display = "block"
        evt.currentTarget.className += " active";  
    }
    

}

// used to toggle collapsing tabs
lastSelected = ""

//$(document).ready(function() { changeTab(event, 'Welcome');});

document.getElementById("button1").addEventListener("click", function () {
    changeTab(event, 'Welcome');
});

document.getElementById("button2").addEventListener("click", function () {
    changeTab(event, 'Colorblind-Picker');
});

document.getElementById("button3").addEventListener("click", function () {
    changeTab(event, 'Audio-Path');
});

document.getElementById("button4").addEventListener("click", function () {
    changeTab(event, 'Contrast-Helper');
});

document.getElementById("button5").addEventListener("click", function () {
    changeTab(event, 'About');
});
