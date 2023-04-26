const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navMenu.toggleAttribute.addEventListener("click", () => { 
    navMenu.classList.toggle("nav-menu_visible");
});