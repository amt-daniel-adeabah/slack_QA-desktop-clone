var icon = document.getElementById("icon");
var fullScreen = document.getElementById("fullscreen");

// dark and light mode
icon.onclick = function() {
    document.body.classList.toggle("lite-mode");
    if(document.body.classList.contains("lite-mode")) {
        icon.className = "fa fa-eye-slash";
    } else {
        icon.className = "fa fa-eye";
    }
}

// fullscreen or expand
fullScreen.onclick = function() {
    document.body.classList.toggle("fullscreen-page");
    if(document.body.classList.contains("fullscreen-page")) {
        fullScreen.className = "fa fa-expand";
    } else {
        fullScreen.className = "fa fa-expand";
    }
}