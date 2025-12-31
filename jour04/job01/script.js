document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier');
            }
            return response.text();
        })
        .then(data => {
            const p = document.createElement('p');
            p.textContent = data;
            document.getElementById('expression-container').appendChild(p);
        })
        .catch(error => console.error('Erreur:', error));
});
