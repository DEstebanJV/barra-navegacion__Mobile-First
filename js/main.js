var menuToggle = document.querySelector(".menu_toggle");
var menu = document.getElementById("menu");

menuToggle.addEventListener("click", (e) => {
    menu.classList.toggle("mostrar")
})