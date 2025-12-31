<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Filtre Pokémon</title>
</head>
<body>
    <h1>Filtrer les Pokémon</h1>
    <form id="filter-form">
        <label>ID: <input type="text" id="id"></label><br>
        <label>Nom: <input type="text" id="nom"></label><br>
        <label>Type: 
            <select id="type">
                <option value="">Tous</option>
                <option value="Feu">Feu</option>
                <option value="Eau">Eau</option>
                <option value="Plante">Plante</option>
                <option value="Électrik">Électrik</option>
            </select>
        </label><br>
        <button type="button" id="filtrer">Filtrer</button>
    </form>

    <div id="resultats"></div>

    <script src="script.js"></script>
</body>
</html>
