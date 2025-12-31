// Fonction qui récupère et affiche la citation
function citation() {
    // Récupère l'élément HTML avec l'id "citation"
    const citationElement = document.getElementById('citation');
    
    // Affiche le contenu textuel de l'élément dans la console
    console.log(citationElement.textContent);
}

// Ajoute un écouteur d'événement sur le bouton avec l'id "button"
// Quand on clique sur le bouton, la fonction citation() est appelée
document.getElementById('button').addEventListener('click', citation);