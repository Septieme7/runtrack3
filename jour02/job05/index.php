<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 05 - Footer Dynamique</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="content">
        <h1>Faites défiler la page pour voir le footer changer de couleur !</h1>
        <p>Cette page a une hauteur de 4096px.</p>
        <div class="scroll-indicator">
            Pourcentage de défilement : <span id="percentage">0</span>%
        </div>
    </div>
    
    <footer id="dynamic-footer"></footer>
    
    <script src="script.js"></script>
</body>
</html>