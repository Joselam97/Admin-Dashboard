// Select all <li> elements within the navigation container
let list = document.querySelectorAll(".navigation li");

//Ensures only one list item has the "hovered" class at any time
function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered"); // Reset all items
    });
    this.classList.add("hovered"); // Highlight the hovered item
}

// Add "mouseover" event listeners to all list items
list.forEach((item) => item.addEventListener("mouseover", activeLink));


// Select key elements for toggling the navigation menu
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");


//Toggles the "active" class for the navigation menu and main content
toggle.onclick = function() {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}