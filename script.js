document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efecto Scroll en Navbar
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Animaciones de Intersección (Fade Up)
    const fadeElements = document.querySelectorAll('.fade-up');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // 3. Inicializar Vanilla Tilt para las Tarjetas Glass (Efecto 3D VIP)
    // El script de VanillaTilt se carga en HTML via CDN
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 5,        // Inclinación máxima en px
            speed: 400,    // Velocidad de transición
            glare: true,   // Agregar brillo de cristal
            "max-glare": 0.15, // Opacidad máxima del brillo
        });
    }

});
