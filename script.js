// Menu Mobile
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    const button = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    const isExpanded = nav.classList.contains('active');
    button.setAttribute('aria-expanded', isExpanded);
}

// Animação ao Scrollar (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
}) ;

// Seleciona elementos para animar
document.addEventListener('DOMContentLoaded', () => {
    // Agora incluímos o .text-center na lista de observação
    const hiddenElements = document.querySelectorAll('.service-card, .team-card, .card, .text-center');
    
    hiddenElements.forEach((el) => observer.observe(el));
});