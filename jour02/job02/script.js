// Fonction pour afficher ou masquer l'article
function showhide() {
    // Récupère le bouton (non utilisé ici mais pourrait l'être)
    const button = document.getElementById('button');
    
    // Cherche si un article existe déjà dans le document
    let article = document.querySelector('article');
    
    // Vérifie si l'article existe
    if (article) {
        // Si l'article existe, on le supprime du DOM
        article.remove();
    } else {
        // Si l'article n'existe pas, on le crée
        article = document.createElement('article');
        
        // Ajoute le texte spécifié dans l'article
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        
        // Ajoute l'article à la fin du corps du document
        document.body.appendChild(article);
    }
}

// Ajoute un écouteur d'événement sur le bouton
// Quand on clique, la fonction showhide() est appelée
document.getElementById('button').addEventListener('click', showhide);