// declaramos variables a usar que se conectan con las class id del html
const navToggle = document.querySelector(".nav-toggle")
const NavMenu = document.querySelector(".nav-menu")

// si la clase/botón navToggle es clickeada se muestra el menú
navToggle.addEventListener("click", ()=> {
    NavMenu.classList.toggle("nav-menu_visible")

    //accesibilidad para personas con discapacidad 
    if(NavMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
})