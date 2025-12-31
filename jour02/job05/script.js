// Attend que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupère l'élément footer
    const footer = document.getElementById('dynamic-footer');
    
    // Récupère l'élément qui affiche le pourcentage
    const percentageElement = document.getElementById('percentage');
    
    // Ajoute un écouteur d'événement pour le défilement de la page
    window.addEventListener('scroll', function() {
        // Récupère la position de défilement verticale (compatibilité navigateurs)
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Calcule la hauteur totale défilable
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Calcule le pourcentage de défilement (entre 0 et 100)
        const scrollPercentage = scrollHeight > 0 ? 
            Math.min(100, Math.round((scrollTop / scrollHeight) * 100)) : 0;
        
        // Met à jour l'affichage du pourcentage
        percentageElement.textContent = scrollPercentage;
        
        // Calcule la teinte HSL en fonction du pourcentage (0-120° pour un arc-en-ciel)
        let hue = (scrollPercentage * 1.2);
        
        // Applique la couleur au footer avec le format HSL
        footer.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
        
        // Change la couleur du texte de l'indicateur pour un meilleur contraste
        if (scrollPercentage > 50) {
            percentageElement.style.color = '#fff'; // Blanc si fond foncé
        } else {
            percentageElement.style.color = '#333'; // Noir si fond clair
        }
    });
});