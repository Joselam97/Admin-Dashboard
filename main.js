// Selecciona todos los elementos de lista (<li>) dentro del contenedor con clase .navigation
let list = document.querySelectorAll(".navigation li");

// Define una función llamada activeLink para agregar la clase "hovered" al elemento sobre el que se pasa el ratón
// Recorre cada elemento de la lista 'list' y elimina la clase 'hovered' para asegurarse de que solo un elemento tenga esta clase a la vez
// Agrega la clase 'hovered' al elemento actual (sobre el que se pasó el ratón)
function activeLink(){
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

// Agrega un evento de "mouseover" a cada elemento de la lista, llamando a la función activeLink cuando se pase el ratón
list.forEach((item) => item.addEventListener("mouseover", activeLink))


// Selecciona el elemento con la clase .toggle (presumiblemente un botón o ícono para abrir/cerrar el menú)
// Selecciona el contenedor de navegación con clase .navigation
// Selecciona el contenedor principal con clase .main
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");


// Define una función que se activa cuando se hace clic en el elemento con clase .toggle
// Alterna (añade o quita) la clase 'active' en el contenedor .navigation, lo que podría mostrar u ocultar el menú
// Alterna la clase 'active' en el contenedor .main, lo que podría ajustar el contenido principal dependiendo del estado del menú
toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}
