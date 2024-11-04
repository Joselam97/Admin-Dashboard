//Selecciona todos los elementos de lista <li> dentro del contenedor de navegación con la clase "navigation"
let list = document.querySelectorAll(".navigation li");

//Define una función para manejar el estado activo (hovered) de los elementos de la lista
function activeLink() {
    // Recorre cada elemento de la lista para asegurarse de que solo uno tenga la clase "hovered"
    list.forEach((item) => {
        // Remueve la clase "hovered" de cada elemento de la lista para limpiar el estado
        item.classList.remove("hovered");
    });
    // Agrega la clase "hovered" al elemento actual (aquel sobre el que el usuario hizo hover)
    this.classList.add("hovered");
}

//Añade un evento "mouseover" a cada elemento de la lista para activar la función activeLink al hacer hover
list.forEach((item) => item.addEventListener("mouseover", activeLink));

//Selecciona el botón de toggle (mostrar/ocultar) del menú de navegación
let toggle = document.querySelector(".toggle");

//Selecciona el contenedor de navegación
let navigation = document.querySelector(".navigation");

//Selecciona el contenedor principal de contenido
let main = document.querySelector(".main");

//Define una función para alternar (mostrar/ocultar) el menú de navegación al hacer clic en el botón toggle
toggle.onclick = function() {
    //Alterna la clase "active" en el contenedor de navegación, mostrando u ocultando el menú
    navigation.classList.toggle("active");
    //Alterna la clase "active" en el contenedor principal, ajustando el tamaño o posición del contenido
    main.classList.toggle("active");
}
