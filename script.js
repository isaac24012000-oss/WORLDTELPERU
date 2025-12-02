/* ============================================
   JAVASCRIPT - INTERACTIVIDAD FULLSCREEN
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 DOM completamente cargado');

    let currentTab = 0;
    const totalTabs = 7;
    let isAnimating = false;

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const contactForm = document.getElementById('contactForm');

    console.log('✓ Tab buttons encontrados:', tabBtns.length);
    console.log('✓ Tab contents encontrados:', tabContents.length);

    // Mostrar primer tab
    if (tabContents.length > 0) {
        tabContents[0].classList.add('active');
    }
    if (tabBtns.length > 0) {
        tabBtns[0].classList.add('active');
    }

    // Función para cambiar tab
    function switchTab(tabIndex) {
        if (isAnimating || tabIndex === currentTab) return;
        if (tabIndex < 0 || tabIndex >= totalTabs) return;

        isAnimating = true;

        // Remover active del tab anterior
        tabContents[currentTab].classList.remove('active');
        tabBtns[currentTab].classList.remove('active');

        // Agregar active al nuevo tab
        currentTab = tabIndex;
        tabContents[currentTab].classList.add('active');
        tabBtns[currentTab].classList.add('active');

        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }

    // Click en tab buttons
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            console.log('📍 Tab clickeado:', index);
            switchTab(index);
        });
    });

    // Botón "Descubrir Más" - va al tab de Acerca de
    const btnScrollNext = document.querySelector('.btn-scroll-next');
    if (btnScrollNext) {
        console.log('✓ Botón encontrado');
        btnScrollNext.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🔘 Botón clickeado, yendo al tab:', 1);
            switchTab(1);
        });
    }

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (isAnimating) return;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            switchTab(currentTab + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            switchTab(currentTab - 1);
        }
    });

    // Rueda del ratón - Deshabilitada para tabs (mejor navegación con pestañas)
    
    // Formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            contactForm.reset();
        });
    }

    console.log('✓ Script inicializado correctamente');
});

/* ============================================
   FUNCIONES DEL CARRUSEL DE GALERÍA
   ============================================ */

let currentSlide = 0;
const totalSlides = 3;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot-indicator');

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// Auto-advance slides cada 5 segundos
setInterval(() => {
    nextSlide();
}, 5000);

/* ============================================
   FUNCIONES DEL DIRECTORIO - MODAL
   ============================================ */

function openDirectorModal(element, name, title, description, imageSrc) {
    const modal = document.getElementById('directorModal');
    const modalName = document.getElementById('modalName');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');

    // Llenar información del modal
    modalName.textContent = name;
    modalTitle.textContent = title;
    modalDescription.textContent = '"' + description + '"';
    modalImage.src = imageSrc;

    // Mostrar modal con animación
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDirectorModal() {
    const modal = document.getElementById('directorModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del contenido
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('directorModal');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeDirectorModal();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeDirectorModal();
            }
        });
    }
});
