
function showElement(p_element) {
    var element = document.getElementById(p_element);
    if (element.style.display === "block"){
        element.style.display = "none";
    }
    else {
        element.style.display = "block";
    }
}
