/*
    Play Station home page cloning
*/

// --- Preparation phase
// Retrieve interested elements from DOM
const burgerMenuElement = document.getElementById('burger-menu');
const navMenuElement = document.getElementById('navbar-menu');


// -- Define functions
// Hamburger menu click handling function
function burgerClickHandling(){
    // TNav menu dusplay
    navMenuElement.classList.toggle('collapse')
}
// --- Processing phase
// Add Burger menu click event listener
burgerMenuElement.addEventListener('click', burgerClickHandling)