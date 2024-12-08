document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            // Alterna a visibilidade do menu
            navList.classList.toggle('active');

            // Aplica a animação aos links do menu
            navLinks.forEach((link, index) => {
                link.style.animation = link.style.animation
                    ? '' // Remove animação se já aplicada
                    : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            });

            // Alterna o estilo do botão hambúrguer
            menuToggle.classList.toggle('toggle');
        });
    }
});
