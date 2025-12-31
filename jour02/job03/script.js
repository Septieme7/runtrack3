// Fonction qui incrémente le compteur de 1
function addone() {
    // Récupère l'élément <p> avec l'id "compteur"
    const compteurElement = document.getElementById('compteur');
    
    // Convertit le texte contenu en nombre entier
    let currentValue = parseInt(compteurElement.textContent);
    
    // Incrémente la valeur et la remet dans l'élément
    compteurElement.textContent = currentValue + 1;
}

// Ajoute un écouteur d'événement sur le bouton
// Quand on clique, la fonction addone() est appelée
document.getElementById('button').addEventListener('click', addone);