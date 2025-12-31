<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 02 - Arc-en-ciel</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
            margin-bottom: 30px;
        }
        .controls {
            margin: 20px 0;
        }
        button {
            margin: 0 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background-color: #45a049;
        }
        #rainbow-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .rainbow-piece {
            width: 150px;
            height: 150px;
            margin: 5px;
            cursor: pointer;
            border: 2px solid #ddd;
            border-radius: 8px;
            transition: transform 0.3s;
        }
        .rainbow-piece:hover {
            transform: scale(1.05);
        }
        #message {
            margin-top: 20px;
            font-size: 24px;
            font-weight: bold;
            padding: 15px;
            border-radius: 8px;
            display: none;
        }
        .win {
            color: #2ecc71;
            background-color: #e8f8ef;
        }
        .lose {
            color: #e74c3c;
            background-color: #fdedec;
        }
        .instructions {
            margin: 20px auto;
            max-width: 600px;
            padding: 15px;
            background-color: #e3f2fd;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>Job 02 - Reconstruction de l'Arc-en-ciel</h1>
    
    <div class="instructions">
        <p>Objectif : Reconstruire l'arc-en-ciel en plaçant les images dans le bon ordre (de 1 à 6)</p>
        <p>Cliquez sur "Mélanger" pour commencer, puis déplacez les images en cliquant dessus.</p>
    </div>
    
    <div class="controls">
        <button id="shuffleBtn">Mélanger les images</button>
        <button id="checkBtn">Vérifier l'ordre</button>
        <button id="resetBtn">Remettre en ordre</button>
    </div>
    
    <div id="rainbow-container">
        <!-- Les images seront ajoutées dynamiquement par jQuery -->
    </div>
    
    <div id="message"></div>
    
    <script src="script.js"></script>
</body>
</html>