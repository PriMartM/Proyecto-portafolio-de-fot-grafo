document.addEventListener('DOMContentLoaded', () => {
    const carruselTrack = document.getElementById('carrusel-track');
    const carruselSlides = document.querySelectorAll('.carrusel-slide');
    const carruselFlechaIzq = document.querySelector('.carrusel-izq');
    const carruselFlechaDer = document.querySelector('.carrusel-der');
    
    let currentIndex = 0;
    const slideWidth = 100;
    
    function updateCarrusel() {
        const offset = -currentIndex * slideWidth;
        carruselTrack.style.transform = `translateX(${offset}%)`;
    }
    
    carruselFlechaDer.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= carruselSlides.length) {
            currentIndex = 0;
        }
        updateCarrusel();
    });
    
    carruselFlechaIzq.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carruselSlides.length - 1;
        }
        updateCarrusel();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            carruselFlechaDer.click();
        } else if (e.key === 'ArrowLeft') {
            carruselFlechaIzq.click();
        }
    });
});
