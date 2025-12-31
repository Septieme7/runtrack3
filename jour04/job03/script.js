document.getElementById('filtrer').addEventListener('click', function() {
    fetch('pokemon.json')
        .then(response => response.json())
        .then(pokemons => {
            const id = document.getElementById('id').value.toLowerCase();
            const nom = document.getElementById('nom').value.toLowerCase();
            const type = document.getElementById('type').value;

            const resultats = pokemons.filter(pokemon => {
                return (!id || pokemon.id.toString().includes(id)) &&
                       (!nom || pokemon.nom.toLowerCase().includes(nom)) &&
                       (!type || pokemon.type === type);
            });

            afficherResultats(resultats);
        })
        .catch(error => console.error('Erreur:', error));
});

function afficherResultats(pokemons) {
    const container = document.getElementById('resultats');
    container.innerHTML = '';

    if (pokemons.length === 0) {
        container.innerHTML = '<p>Aucun Pokémon trouvé.</p>';
        return;
    }

    const ul = document.createElement('ul');
    pokemons.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = `#${pokemon.id} ${pokemon.nom} (${pokemon.type})`;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
