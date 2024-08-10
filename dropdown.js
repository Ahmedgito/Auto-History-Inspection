function checkAvailability() {
    var dropdown = document.getElementById("country-select");
    var icon = document.getElementById("available-icon");

    if (dropdown.value !== "") {
        icon.style.display = "inline";
    } else {
        icon.style.display = "none";
    }
}
