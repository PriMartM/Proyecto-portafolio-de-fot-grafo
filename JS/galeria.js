document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const imgAmpliada = document.getElementById('img-ampliada');
    const carruselImgs = document.querySelectorAll('.carrusel-img');
    const cerrar = document.querySelector('.cerrar-btn');
    const flechaIzq = document.querySelector('.flecha-izq');
    const flechaDer = document.querySelector('.flecha-der');

    let indiceActual = 0;
    const arrayImagenes = Array.from(carruselImgs);

    function abrirLightbox(index) {
        const imagen = arrayImagenes[index];
        if (!imagen) return;
        indiceActual = index;
        imgAmpliada.src = imagen.src;
        lightbox.style.display = 'flex';
    }

    function actualizarImagen() {
        const imagen = arrayImagenes[indiceActual];
        if (!imagen) return;
        imgAmpliada.src = imagen.src;
    }

    arrayImagenes.forEach((imagen, index) => {
        imagen.addEventListener('click', () => abrirLightbox(index));
    });

    cerrar.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    flechaIzq.addEventListener('click', (e) => {
        e.stopPropagation();
        indiceActual--;
        if (indiceActual < 0) {
            indiceActual = arrayImagenes.length - 1;
        }
        actualizarImagen();
    });

    flechaDer.addEventListener('click', (e) => {
        e.stopPropagation();
        indiceActual++;
        if (indiceActual >= arrayImagenes.length) {
            indiceActual = 0;
        }
        actualizarImagen();
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display !== 'flex') return;
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        } else if (e.key === 'ArrowLeft') {
            flechaIzq.click();
        } else if (e.key === 'ArrowRight') {
            flechaDer.click();
        }
    });
});
