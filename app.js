const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
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