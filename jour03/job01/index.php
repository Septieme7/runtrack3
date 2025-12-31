<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 01 - jQuery Show/Hide</title>
    <!-- Inclure jQuery depuis CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            text-align: center;
        }
        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        #citation {
            margin: 30px auto;
            padding: 20px;
            max-width: 600px;
            border: 2px solid #3498db;
            border-radius: 10px;
            background-color: #f8f9fa;
            font-size: 18px;
            font-style: italic;
            display: none; /* Caché par défaut */
        }
    </style>
</head>
<body>
    <h1>Job 01 - jQuery Show/Hide</h1>
    
    <button id="showBtn">Afficher la citation</button>
    <button id="hideBtn">Cacher la citation</button>
    
    <div id="citation">
        "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie."
    </div>
    
    <script src="script.js"></script>
</body>
</html>