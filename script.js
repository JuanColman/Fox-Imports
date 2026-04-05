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
    if (typeof VanillaTilt !== "undefined") {
        // En móviles recomendamos deshabilitar el efecto tilt para evitar interferencia al tocar la pantalla.
        // Se aplicará solo si el ancho de la pantalla es mayor a 768px (pantallas no táctiles generalmente).
        const matchMedia = window.matchMedia("(min-width: 768px)");
        if (matchMedia.matches) {
            VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
                max: 5,        
                speed: 400,    
                glare: true,   
                "max-glare": 0.15,
            });
        }
    }

    // 4. Menu Hamburger para celulares (Funcional para iOS/Android)
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mainNav = document.getElementById("main-nav-container");

    if (menuBtn && mainNav) {
        
        // Función principal toggle touch/click
        const toggleMenu = (e) => {
            e.preventDefault(); // Previene eventos fantasmas en iOS
            mainNav.classList.toggle("active");
            
            const icon = menuBtn.querySelector('i');
            if(mainNav.classList.contains("active")) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        };

        // Usar evento click estandar (mejor para elemento tipo button nativo conf igurado)
        menuBtn.addEventListener("click", toggleMenu);

        // Cerrar menú automáticamente al hacer click en los enlaces
        const navLinks = mainNav.querySelectorAll("a.nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("active");
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

});
