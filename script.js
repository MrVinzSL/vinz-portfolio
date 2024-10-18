// Animation effect for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Background particle effect (simple dots)
const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.body.appendChild(particle);

    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${2 + Math.random() * 3}s`;

    particle.addEventListener('animationend', () => {
        particle.remove();
    });
};

setInterval(createParticle, 200);
