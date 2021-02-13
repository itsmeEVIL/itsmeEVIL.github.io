const checkbox = document.getElementById("switch"); //get the checkbox to a variable

// check cache
if (localStorage.getItem("theme") == "dark") {
    enableDark();
} else {
    disableDark();
}

// light/dark theme toggler
// listen if checkbox is checked or not
checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        enableDark();
    } else {
        disableDark();
    }
});

// enable dark theme
function enableDark() {
    document.body.classList.add("dark-theme");
    checkbox.checked = true;
    localStorage.setItem("theme", "dark");
}

// disable dark theme
function disableDark() {
    document.body.classList.remove("dark-theme");
    checkbox.checked = false;
    localStorage.setItem("theme", "light");
}
