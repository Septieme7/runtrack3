// Attend que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function() {
    // Récupère l'élément textarea avec l'id "keylogger"
    const textarea = document.getElementById('keylogger');
    
    // Ajoute un écouteur d'événement sur tout le document pour les touches du clavier
    document.addEventListener('keydown', function(event) {
        // Récupère la touche pressée
        const key = event.key;
        
        // Vérifie si la touche est une lettre (a-z ou A-Z) avec une expression régulière
        const isLetter = /^[a-zA-Z]$/.test(key);
        
        // Si c'est une lettre
        if (isLetter) {
            // Vérifie si le focus est actuellement sur le textarea
            if (document.activeElement === textarea) {
                // Si oui, ajoute la lettre deux fois
                textarea.value += key + key;
            } else {
                // Si non, ajoute la lettre une seule fois
                textarea.value += key;
            }
        }
    });
});