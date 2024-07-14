console.log("Welcome to Telkom University Website");
console.log("PMB Navbar Loaded");
// script.js
// script.js
let angle = 0;
const slider = document.querySelector('.slider');

function rotateCarousel(direction) {
    angle += direction * 72; // Rotate by 72 degrees (360 / 5 items)
    slider.style.transform = `rotateY(${angle}deg)`;
}
