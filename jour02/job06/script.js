// Attend que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupère les éléments DOM nécessaires
    const sequenceElement = document.getElementById('sequence');
    const normalContent = document.getElementById('normal-content');
    const konamiContent = document.getElementById('konami-content');
    
    // Définit la séquence exacte du code Konami
    const konamiCode = [
        'ArrowUp', 'ArrowUp',        // ↑ ↑
        'ArrowDown', 'ArrowDown',    // ↓ ↓
        'ArrowLeft', 'ArrowRight',   // ← →
        'ArrowLeft', 'ArrowRight',   // ← →
        'KeyB', 'KeyA'               // B A
    ];
    
    // Tableau qui stocke les touches pressées par l'utilisateur
    let userSequence = [];
    
    // Fonction pour mettre à jour l'affichage de la séquence
    function updateSequenceDisplay() {
        // Transforme les codes de touches en symboles lisibles
        sequenceElement.textContent = userSequence.map(key => {
            // Convertit chaque code de touche en symbole
            switch(key) {
                case 'ArrowUp': return '↑';
                case 'ArrowDown': return '↓';
                case 'ArrowLeft': return '←';
                case 'ArrowRight': return '→';
                case 'KeyB': return 'B';
                case 'KeyA': return 'A';
                default: return key; // Au cas où
            }
        }).join(' '); // Joint les symboles avec des espaces
    }
    
    // Fonction pour réinitialiser la séquence de l'utilisateur
    function resetSequence() {
        userSequence = []; // Vide le tableau
        updateSequenceDisplay(); // Met à jour l'affichage
    }
    
    // Fonction qui vérifie si la séquence de l'utilisateur correspond au code Konami
    function checkKonamiCode() {
        // Vérifie d'abord si la longueur correspond
        if (userSequence.length === konamiCode.length) {
            // Compare chaque élément des deux tableaux
            for (let i = 0; i < konamiCode.length; i++) {
                // Dès qu'une différence est trouvée, retourne false
                if (userSequence[i] !== konamiCode[i]) {
                    return false;
                }
            }
            // Si toutes les touches correspondent, retourne true
            return true;
        }
        // Si la longueur ne correspond pas, retourne false
        return false;
    }
    
    // Fonction qui active le thème Konami
    function activateKonamiTheme() {
        // Change la classe du body pour appliquer les styles CSS
        document.body.className = 'konami';
        
        // Cache le contenu normal
        normalContent.style.display = 'none';
        
        // Affiche le contenu Konami
        konamiContent.style.display = 'block';
        
        // Option: pourrait ajouter un son ici
        // const audio = new Audio('son.mp3');
        // audio.play();
        
        // Lance l'effet confetti
        createConfetti();
    }
    
    // Fonction qui crée un effet confetti visuel
    function createConfetti() {
        // Définit les couleurs du confetti (couleurs de La Plateforme)
        const colors = ['#00D1FF', '#FFFFFF', '#FFD700'];
        
        // Crée 150 éléments confetti
        for (let i = 0; i < 150; i++) {
            // Crée un nouvel élément div pour chaque confetti
            const confetti = document.createElement('div');
            
            // Applique les styles CSS au confetti
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%'; // Forme ronde
            confetti.style.left = Math.random() * 100 + 'vw'; // Position horizontale aléatoire
            confetti.style.top = '-20px'; // Commence au-dessus de l'écran
            confetti.style.opacity = '0.8';
            confetti.style.zIndex = '9999'; // Au-dessus de tout
            
            // Ajoute le confetti au body
            document.body.appendChild(confetti);
            
            // Crée une animation pour faire tomber le confetti
            const animation = confetti.animate([
                // Début: position initiale
                { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                // Fin: tombe en bas de l'écran avec rotation
                { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                // Durée aléatoire entre 2 et 5 secondes
                duration: 2000 + Math.random() * 3000,
                // Courbe d'animation pour un effet naturel
                easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
            });
            
            // Quand l'animation est terminée, supprime l'élément du DOM
            animation.onfinish = () => confetti.remove();
        }
    }
    
    // Écouteur d'événement pour les touches du clavier
    document.addEventListener('keydown', function(event) {
        // Ajoute le code de la touche pressée au tableau
        userSequence.push(event.code);
        
        // Garde seulement les N dernières touches (N = longueur du code Konami)
        // Cela permet d'éviter que le tableau ne devienne trop grand
        if (userSequence.length > konamiCode.length) {
            userSequence = userSequence.slice(-konamiCode.length);
        }
        
        // Met à jour l'affichage de la séquence
        updateSequenceDisplay();
        
        // Vérifie si le code Konami a été entré
        if (checkKonamiCode()) {
            // Active le thème Konami
            activateKonamiTheme();
            // Réinitialise la séquence pour permettre de le refaire
            resetSequence();
        }
    });
    
    // Timer pour réinitialiser automatiquement la séquence après inactivité
    let resetTimer;
    
    // Redémarre le timer à chaque touche pressée
    document.addEventListener('keydown', function() {
        // Efface le timer existant
        clearTimeout(resetTimer);
        
        // Démarre un nouveau timer de 3 secondes
        resetTimer = setTimeout(resetSequence, 3000);
    });
    
    // Initialise l'affichage au chargement de la page
    updateSequenceDisplay();
});