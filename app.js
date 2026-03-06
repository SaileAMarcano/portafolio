const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const botonesHablemos = document.querySelectorAll('.abrir-modal');
const modalOverlay = document.getElementById('modal-contacto');
const btnCerrar = document.getElementById('btn-cerrar');


menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


botonesHablemos.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        modalOverlay.classList.add('active');
        navLinks.classList.remove('active');
    });
});

btnCerrar.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});