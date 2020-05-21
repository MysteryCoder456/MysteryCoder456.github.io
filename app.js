var darkMode = false;

function switchAppearance() {
    var body = document.querySelector("body");

    if (!darkMode) {
        body.bgColor = "#252526";
        body.style.color = "white";
        darkMode = true;
    } else {
        body.bgColor = "white";
        body.style.color = "black";
        darkMode = false;
    }
}

document.getElementById("darkModeButton").addEventListener("click", switchAppearance);
