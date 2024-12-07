// Fonction pour basculer les sections affichées/masquées
function toggleSection(element) {
    const content = element.nextElementSibling;
    content.classList.toggle('hidden');
    const toggle = element.querySelector('.toggle');
    toggle.textContent = content.classList.contains('hidden') ? '[+]' : '[-]';
}

// Animation de fade-in au scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.container').forEach((section) => {
    observer.observe(section);
});
// Fonction pour afficher/masquer les détails d'un diplôme
// Ajouter un délai pour cacher le splash screen après 3 secondes
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('splash-screen').classList.add('hidden');
    }, 3000); // Disparaît après 3 secondes
});

