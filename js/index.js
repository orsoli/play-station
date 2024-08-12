/*
    Play Station home page cloning
*/

// --- Preparation phase
// Retrieve interested elements from DOM
const burgerMenuElement = document.getElementById('burger-menu');
const navMenuElement = document.getElementById('navbar-menu');
const navLinkElements = document.querySelectorAll(".nav-link");
const dropDownMenuElements = document.querySelectorAll(".dropdown-menu");
const navBarChevronDownElements = document.querySelectorAll(".navbar-chevronDown")
const navBarChevronDownHoverElements = document.querySelectorAll(".navbar-chevronDown-hover")
const imgListElements = document.querySelectorAll(`.img-list li`)


// --- Processing phase
//  Define functions
// Hamburger menu click handling function
function burgerClickHandling(){
    // TNav menu dusplay
    navMenuElement.classList.toggle('collapse')
}
// --- Loping phase
// Ceate for loop to pass in each navlink element
for(i = 0; i < navLinkElements.length; i++){
    // Save each dropdown element
    const dropDownMenuElement = dropDownMenuElements[i]
    // Save each navlink element
    const navLinkElement = navLinkElements[i]
    // Save every navbar chevrondown element
    const navBarChevronDownElement = navBarChevronDownElements[i];
    // Save every navbar chevrondown hover element
    const navBarChevronDownHoverElement = navBarChevronDownHoverElements[i];

    // Add mouseover event listener to navbar chevrondown
    navLinkElement.addEventListener('mouseover', function(){
        // Mouse over event function
        navBarChevronDownElement.classList.toggle('d-none')
        navBarChevronDownHoverElement.classList.toggle('d-none')
    })
    // Add an event listener 'mouse out' to navbar chevrondown
    navLinkElement.addEventListener('mouseout', function(){
        // Mouse over event function
        navBarChevronDownElement.classList.toggle('d-none')
        navBarChevronDownHoverElement.classList.toggle('d-none')
    })
    
    // Add an 'click' event listener 
    navLinkElement.addEventListener('click', function(e){
        e.preventDefault();
        for(i = 0; i < navLinkElements.length; i++){
            const invisibleDropDownElement = dropDownMenuElements[i]
            // Add for all element collapse class
            invisibleDropDownElement.classList.add('collapse')
            // Remove collapse class in clicked element
            dropDownMenuElement.classList.remove('collapse')
        }
    })
}

// Add for loop to pass in every li element in img list
for(i = 0; i < imgListElements.length; i++){
    // Save each of list element
   const imgListElement = imgListElements[i]
    console.log(imgListElement)
    // Add an event listener
    imgListElement.addEventListener('click', function(e){
        e.preventDefault();
        // Save each elements to do inactive
        for(i = 0; i < imgListElements.length; i++){
            const inactiveImgListElement = imgListElements[i]
            // Remove active class for all elements
            inactiveImgListElement.classList.remove('active-card')
            // Add active class to the clicked img
            imgListElement.classList.add('active-card')
        }
    })

}

// Add Burger menu click event listener
burgerMenuElement.addEventListener('click', burgerClickHandling)