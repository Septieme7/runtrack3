<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 06 - Konami Code</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="normal-content">
        <h1>Entrez le code Konami pour révéler le thème de La Plateforme_ !</h1>
        <p>Code Konami : ↑ ↑ ↓ ↓ ← → ← → B A</p>
        <div class="indicator">Séquence actuelle : <span id="sequence"></span></div>
    </div>
    
    <div id="konami-content" style="display: none;">
        <h1>Bienvenue sur La Plateforme_ !</h1>
        <div class="logo">
            <div class="plateforme-logo">_</div>
        </div>
        <p>Vous avez débloqué le thème secret !</p>
    </div>
    
    <script src="script.js"></script>
</body>
</html>