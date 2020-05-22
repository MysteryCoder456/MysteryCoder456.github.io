var darkMode = true;

function switchToDark() {
    var body = document.querySelector("body");
    body.bgColor = "#252526";
    body.style.color = "white";

    var active = document.querySelector(".active");
    active.style.backgroundColor = "#252526";
    active.style.color = "white";

    var links = document.querySelector(".main-body").querySelectorAll("a");
    links.forEach(link => link.style.color = "white");
}

function switchToLight() {
    var body = document.querySelector("body");
    body.bgColor = "white";
    body.style.color = "black";

    var active = document.querySelector(".active");
    active.style.backgroundColor = "white";
    active.style.color = "black";

    var links = document.querySelector(".main-body").querySelectorAll("a");
    links.forEach(link => link.style.color = "black");
}

function switchAppearance() {
    var body = document.querySelector("body");

    if (!darkMode) {
        darkMode = true;
        localStorage.setItem("darkMode", true);
        switchToDark();
    } else {
        darkMode = false;
        localStorage.setItem("darkMode", false);
        switchToLight();
    }
}

window.onload = function () {
    darkMode = (localStorage.getItem("darkMode") === "true");

    if (darkMode) {
        switchToDark();
    } else {
        switchToLight();
    }
}

document.querySelector("#darkModeButton").addEventListener("click", switchAppearance);