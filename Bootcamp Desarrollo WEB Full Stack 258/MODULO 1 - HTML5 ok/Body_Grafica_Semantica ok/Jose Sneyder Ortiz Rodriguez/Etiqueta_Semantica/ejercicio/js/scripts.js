// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.boton-seccion');
    const seccion0 = document.getElementById('seccion0');
    const secciones = document.querySelectorAll('section[id^="seccion"]:not(#seccion0)');

    // Mostrar la sección de instrucciones al cargar la página
    seccion0.style.display = 'block';
    secciones.forEach(seccion => seccion.style.display = 'none');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Alternar la visualización de la sección seleccionada
            if (targetSection.style.display === 'none' || targetSection.style.display === '') {
                seccion0.style.display = 'none';
                targetSection.style.display = 'block';
            } else {
                targetSection.style.display = 'none';
            }

            // Comprobar si todas las secciones están ocultas y mostrar seccion0 si es necesario
            const todasOcultas = Array.from(secciones).every(seccion => seccion.style.display === 'none');
            if (todasOcultas) {
                seccion0.style.display = 'block';
            }
        });
    });
});
