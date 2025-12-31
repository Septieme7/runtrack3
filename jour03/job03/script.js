$(document).ready(function() {
    // Configuration du jeu
    const PUZZLE_SIZE = 3; // Grille 3x3
    const TOTAL_PIECES = PUZZLE_SIZE * PUZZLE_SIZE - 1; // 8 pièces + 1 vide
    const PIECE_SIZE = 150; // Taille de chaque pièce en pixels
    
    // État du jeu
    let puzzleState = [];
    let emptyIndex = 8; // La case vide est la dernière (index 8)
    let gameWon = false;
    let moveCount = 0;
    let startTime;
    let timerInterval;
    
    // Initialiser le jeu
    function initGame() {
        // Réinitialiser l'état
        puzzleState = Array.from({length: TOTAL_PIECES}, (_, i) => i + 1);
        puzzleState.push(0); // 0 représente la case vide
        emptyIndex = 8;
        gameWon = false;
        moveCount = 0;
        
        // Mélanger le puzzle
        shufflePuzzle();
        
        // Afficher le puzzle
        renderPuzzle();
        
        // Mettre à jour l'interface
        updateUI();
        
        // Démarrer le timer
        startTimer();
        
        // Cacher le message de victoire
        $('#message').hide();
    }
    
    // Mélanger le puzzle
    function shufflePuzzle() {
        // Effectuer 100 mouvements aléatoires pour mélanger
        for (let i = 0; i < 100; i++) {
            const possibleMoves = getPossibleMoves();
            const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            movePiece(randomMove);
        }
        
        // Vérifier si le puzzle est résoluble (50% des configurations ne le sont pas)
        if (!isSolvable()) {
            // Si insoluble, échanger deux pièces non vides
            let piece1 = 0, piece2 = 1;
            while (piece1 === emptyIndex || piece2 === emptyIndex) {
                piece1 = Math.floor(Math.random() * TOTAL_PIECES);
                piece2 = Math.floor(Math.random() * TOTAL_PIECES);
            }
            
            // Échanger les pièces
            [puzzleState[piece1], puzzleState[piece2]] = 
            [puzzleState[piece2], puzzleState[piece1]];
        }
    }
    
    // Vérifier si le puzzle est résoluble
    function isSolvable() {
        // Pour une grille 3x3, le puzzle est résoluble si le nombre d'inversions est pair
        let inversions = 0;
        
        for (let i = 0; i < puzzleState.length; i++) {
            for (let j = i + 1; j < puzzleState.length; j++) {
                if (puzzleState[i] && puzzleState[j] && puzzleState[i] > puzzleState[j]) {
                    inversions++;
                }
            }
        }
        
        return inversions % 2 === 0;
    }
    
    // Rendre le puzzle dans le DOM
    function renderPuzzle() {
        const $container = $('#puzzle-container');
        $container.empty();
        
        puzzleState.forEach((piece, index) => {
            const $piece = $('<div>', {
                class: piece === 0 ? 'puzzle-piece empty' : 'puzzle-piece',
                'data-index': index,
                'data-piece': piece
            });
            
            if (piece !== 0) {
                // Position de l'image de fond
                const row = Math.floor((piece - 1) / PUZZLE_SIZE);
                const col = (piece - 1) % PUZZLE_SIZE;
                const bgX = -col * PIECE_SIZE;
                const bgY = -row * PIECE_SIZE;
                
                $piece.css({
                    'background-image': `url('images/image${piece}.png')`,
                    'background-position': `${bgX}px ${bgY}px`
                });
            }
            
            $container.append($piece);
        });
    }
    
    // Obtenir les mouvements possibles
    function getPossibleMoves() {
        const moves = [];
        const row = Math.floor(emptyIndex / PUZZLE_SIZE);
        const col = emptyIndex % PUZZLE_SIZE;
        
        // Haut
        if (row > 0) moves.push(emptyIndex - PUZZLE_SIZE);
        // Bas
        if (row < PUZZLE_SIZE - 1) moves.push(emptyIndex + PUZZLE_SIZE);
        // Gauche
        if (col > 0) moves.push(emptyIndex - 1);
        // Droite
        if (col < PUZZLE_SIZE - 1) moves.push(emptyIndex + 1);
        
        return moves;
    }
    
    // Déplacer une pièce
    function movePiece(pieceIndex) {
        if (gameWon) return false;
        
        // Vérifier si la pièce est adjacente à la case vide
        const possibleMoves = getPossibleMoves();
        if (!possibleMoves.includes(pieceIndex)) return false;
        
        // Échanger la pièce avec la case vide
        [puzzleState[pieceIndex], puzzleState[emptyIndex]] = 
        [puzzleState[emptyIndex], puzzleState[pieceIndex]];
        
        emptyIndex = pieceIndex;
        moveCount++;
        
        // Re-rendre le puzzle
        renderPuzzle();
        
        // Vérifier si le joueur a gagné
        checkWin();
        
        // Mettre à jour l'interface
        updateUI();
        
        return true;
    }
    
    // Vérifier si le joueur a gagné
    function checkWin() {
        // Vérifier si toutes les pièces sont dans l'ordre (et la case vide à la fin)
        for (let i = 0; i < TOTAL_PIECES; i++) {
            if (puzzleState[i] !== i + 1) {
                return false;
            }
        }
        
        // Vérifier que la dernière case est vide
        if (puzzleState[TOTAL_PIECES] !== 0) {
            return false;
        }
        
        // Victoire !
        gameWon = true;
        showWinMessage();
        clearInterval(timerInterval);
        
        return true;
    }
    
    // Afficher le message de victoire
    function showWinMessage() {
        const $message = $('#message');
        const time = $('#timer').text();
        
        $message.html(`
            🎉 <strong>Félicitations !</strong> 🎉<br>
            Vous avez résolu le puzzle !<br>
            Temps: ${time}<br>
            Mouvements: ${moveCount}
        `);
        $message.removeClass('lose').addClass('win').fadeIn(500);
    }
    
    // Mettre à jour l'interface utilisateur
    function updateUI() {
        $('#moveCount').text(moveCount);
        
        if (gameWon) {
            $('#restartBtn').text('Nouvelle Partie');
        } else {
            $('#restartBtn').text('Recommencer');
        }
    }
    
    // Gérer le timer
    function startTimer() {
        clearInterval(timerInterval);
        startTime = new Date();
        
        timerInterval = setInterval(() => {
            const now = new Date();
            const diff = Math.floor((now - startTime) / 1000);
            const minutes = Math.floor(diff / 60).toString().padStart(2, '0');
            const seconds = (diff % 60).toString().padStart(2, '0');
            
            $('#timer').text(`${minutes}:${seconds}`);
        }, 1000);
    }
    
    // Gérer le clic sur une pièce
    function setupPieceClick() {
        $(document).on('click', '.puzzle-piece:not(.empty)', function() {
            const pieceIndex = parseInt($(this).data('index'));
            movePiece(pieceIndex);
        });
    }
    
    // Solution de test (mettre en ordre)
    function solvePuzzle() {
        // Pour tester, on met toutes les pièces en ordre
        puzzleState = Array.from({length: TOTAL_PIECES}, (_, i) => i + 1);
        puzzleState.push(0);
        emptyIndex = 8;
        
        renderPuzzle();
        checkWin();
        updateUI();
    }
    
    // Initialisation
    initGame();
    setupPieceClick();
    
    // Événements des boutons
    $('#restartBtn').click(initGame);
    $('#solveBtn').click(solvePuzzle);
});