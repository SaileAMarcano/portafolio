// 1. Seleccionamos los elementos de nuestro HTML
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// 2. Agregamos el evento de "clic"
menuToggle.addEventListener('click', () => {
    // classList.toggle agrega la clase 'active' si no la tiene, y se la quita si ya la tiene.
    navLinks.classList.toggle('active');
});