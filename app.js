var darkMode = true;

function switchToDark() {
    var body = document.querySelector("body");
    body.bgColor = "#252526";
    body.style.color = "white";
}

function switchToLight() {
    var body = document.querySelector("body");
    body.bgColor = "white";
    body.style.color = "black";
}

function switchAppearance() {
    var body = document.querySelector("body");

    if (!darkMode) {
        darkMode = true;
        switchToDark();
    } else {
        darkMode = false;
        switchToLight();
    }
}

window.onload = function () {
    if (darkMode) {
        switchToDark();
    } else {
        switchToLight();
    }
}

document.getElementById("darkModeButton").addEventListener("click", switchAppearance);