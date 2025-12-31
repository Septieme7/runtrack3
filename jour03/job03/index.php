<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Jeu du Taquin</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            background-color: #2c3e50;
            color: white;
        }
        h1 {
            margin-bottom: 30px;
            color: #00D1FF;
        }
        .game-container {
            display: inline-block;
            margin: 20px auto;
            padding: 20px;
            background-color: #34495e;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }
        #puzzle-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2px;
            width: 450px;
            height: 450px;
            margin: 20px auto;
            background-color: #2c3e50;
            border: 3px solid #00D1FF;
            border-radius: 5px;
            overflow: hidden;
        }
        .puzzle-piece {
            width: 150px;
            height: 150px;
            background-size: 450px 450px;
            cursor: pointer;
            transition: transform 0.2s;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .puzzle-piece:hover {
            transform: scale(1.02);
        }
        .empty {
            background-color: #1a252f;
            cursor: default;
        }
        .empty:hover {
            transform: none;
        }
        .controls {
            margin: 20px 0;
        }
        button {
            margin: 0 10px;
            padding: 12px 25px;
            font-size: 16px;
            cursor: pointer;
            background-color: #00D1FF;
            color: white;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #00b8e6;
        }
        button:disabled {
            background-color: #7f8c8d;
            cursor: not-allowed;
        }
        #message {
            margin-top: 20px;
            font-size: 24px;
            font-weight: bold;
            padding: 15px;
            border-radius: 8px;
            display: none;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
        }
        .win {
            color: #2ecc71;
            background-color: rgba(46, 204, 113, 0.1);
            border: 2px solid #2ecc71;
        }
        .instructions {
            margin: 20px auto;
            max-width: 600px;
            padding: 15px;
            background-color: rgba(0, 209, 255, 0.1);
            border-radius: 8px;
            border: 1px solid #00D1FF;
        }
        .moves-counter {
            font-size: 18px;
            margin: 10px 0;
            color: #00D1FF;
        }
        .game-info {
            display: flex;
            justify-content: space-around;
            max-width: 450px;
            margin: 10px auto;
        }
    </style>
</head>
<body>
    <h1>Job 03 - Jeu du Taquin</h1>
    
    <div class="instructions">
        <p>🎮 <strong>Comment jouer :</strong></p>
        <p>• Cliquez sur une pièce adjacente à la case vide pour la déplacer</p>
        <p>• Reconstruisez l'image complète pour gagner</p>
        <p>• Le jeu se mélange automatiquement au démarrage</p>
    </div>
    
    <div class="game-info">
        <div class="moves-counter">Mouvements : <span id="moveCount">0</span></div>
        <div class="timer">Temps : <span id="timer">00:00</span></div>
    </div>
    
    <div class="game-container">
        <div id="puzzle-container">
            <!-- Les pièces du puzzle seront ajoutées dynamiquement -->
        </div>
    </div>
    
    <div class="controls">
        <button id="restartBtn">Recommencer</button>
        <button id="solveBtn">Solution (test)</button>
    </div>
    
    <div id="message"></div>
    
    <script src="script.js"></script>
</body>
</html>