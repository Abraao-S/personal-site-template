// Variabls
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav--link');

// testing
// console.log(navLinks);

// toggles hamburger menu on and off
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//closes the hamburger menu when any link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});