// 1. Seleccionamos los elementos de nuestro HTML
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// 2. Agregamos el evento de "clic"
menuToggle.addEventListener('click', () => {
    // classList.toggle agrega la clase 'active' si no la tiene, y se la quita si ya la tiene.
    navLinks.classList.toggle('active');
});

const btnHablemos = document.querySelector('a[href="#contacto"]');
const modalOverlay = document.getElementById('modal-contacto');
const btnCerrar = document.getElementById('btn-cerrar');

btnHablemos.addEventListener('click', (e) => {
    e.preventDefault(); 
    modalOverlay.classList.add('active');
});

btnCerrar.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});