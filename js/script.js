var navToggle = document.getElementById("nav-toggle");
var header = document.getElementById("header");

navToggle.addEventListener("click", function() {
    header.classList.toggle("open");
});

window.addEventListener("scroll", function() {
    if(window.pageYOffset > 125) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});