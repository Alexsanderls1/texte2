document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial-item");
    let current = 0;

    const showNextTestimonial = () => {
        // Remove a classe "active" e adiciona "exit" ao atual
        testimonials[current].classList.remove("active");
        testimonials[current].classList.add("exit");

        // Move para o próximo; volta ao primeiro se for o último
        current = (current + 1) % testimonials.length;

        // Remove a classe "exit" e adiciona "active" ao próximo
        testimonials[current].classList.remove("exit");
        testimonials[current].classList.add("active");
    };

    // Ativar o primeiro elemento inicialmente
    testimonials[current].classList.add("active");

    // Troca de avaliação a cada 3 segundos
    setInterval(showNextTestimonial, 3000);
});
