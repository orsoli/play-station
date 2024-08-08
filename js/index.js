/*
    Play Station home page cloning
*/

// --- Preparation phase
// Retrieve interested elements from DOM
const burgerMenuElement = document.getElementById('burger-menu');
const navMenuElement = document.getElementById('navbar-menu');
const navLinkElements = document.querySelectorAll("a.nav-link");
const dropDownMenuElements = document.querySelectorAll(".dropdown-menu");
const searchBarElement = document.querySelector(".search-bar");
const searchIconElement = document.getElementById('search-icon')


// -- Define functions
// Hamburger menu click handling function
function burgerClickHandling(){
    // TNav menu dusplay
    navMenuElement.classList.toggle('collapse')
}
// Search icon click 
function searchIconClickHandling(){
    // Search bar display
    searchBarElement.classList.toggle('d-none')
}
// Ceate for loop to pass in each element
for(i = 0; i < navLinkElements.length; i++){
    const dropDownMenuElement = dropDownMenuElements[i]
    const navLinkElement = navLinkElements[i]
    // Add a event listener 
    navLinkElement.addEventListener('click', function(e){
        e.preventDefault();
        dropDownMenuElement.classList.toggle('collapse')
    })
}
// --- Processing phase
// Add Burger menu click event listener
burgerMenuElement.addEventListener('click', burgerClickHandling)
// Add Search Icon click event listener
searchIconElement.addEventListener('click', searchIconClickHandling)