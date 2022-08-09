'use strict'
// let clicked = document.getElementById('sale');
// clicked.addEventListener("click", getPass);
// function getPass () {
//     let pass = prompt('Please enter the password: ')
//     if (pass.toLowerCase() === 'password') {
//         window.open('sales.html')
//     } else if (pass != 'password') {
//         alert('That is not correct');
//         return;
//     } 
// }
// Will revisit function to add password later on.
function fadeScroll(){
    let reveal = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveal.length; i++){
        let windowH = window.innerHeight;
        // Defining the top of an element by providing information relative to the viewport
        let elemTop = reveal[i].getBoundingClientRect().top;
        // Defines when the content is visible
        let visable = 100;
        if (elemTop < windowH - visable) {
            // Used to add css properties to a class, and take them away.
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }
    }
}
// Window will trigger JS function fadeScroll when the user scrolls past the objects
window.addEventListener("scroll", fadeScroll);
document.getele