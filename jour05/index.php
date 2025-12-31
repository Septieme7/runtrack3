<?php
session_start();

// Vérifier si l'utilisateur est connecté
$isLoggedIn = isset($_SESSION['user']);
$prenom = $isLoggedIn ? $_SESSION['user']['prenom'] : '';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CyberAuth - Accueil</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto+Mono:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body>
    <div class="cyber-container">
        <div class="scanlines"></div>
        <div class="grid-lines"></div>
        
        <header class="cyber-header">
            <div class="glitch" data-text="CYBERAUTH">CYBERAUTH</div>
            <p class="cyber-subtitle">SYSTEME D'AUTHENTIFICATION 2077</p>
        </header>

        <main class="main-content">
            <?php if ($isLoggedIn): ?>
                <div class="cyber-card logged-in">
                    <h2 class="neon-text">
                        <i class="fas fa-user-shield"></i>
                        ACCÈS AUTORISÉ
                    </h2>
                    <div class="user-info">
                        <div class="data-row">
                            <span class="data-label">IDENTITÉ:</span>
                            <span class="data-value"><?php echo htmlspecialchars($prenom); ?></span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">STATUT:</span>
                            <span class="data-value cyberpunk-green">CONNECTÉ</span>
                        </div>
                    </div>
                    <div class="terminal-output">
                        <p>> Bienvenue dans le système, <?php echo htmlspecialchars($prenom); ?>.</p>
                        <p>> Toutes les permissions vous sont accordées.</p>
                    </div>
                    <a href="logout.php" class="cyber-button logout-btn">
                        <i class="fas fa-sign-out-alt"></i>
                        DÉCONNEXION
                    </a>
                </div>
            <?php else: ?>
                <div class="cyber-card">
                    <div class="glitch" data-text="SYSTEME VERROUILLÉ">SYSTEME VERROUILLÉ</div>
                    <p class="access-denied">ACCÈS RESTREINT - IDENTIFICATION REQUISE</p>
                    
                    <div class="terminal-output">
                        <p>> Système d'authentification CYBERAUTH v3.2.1</p>
                        <p>> Sécurité: Niveau MAXIMUM</p>
                        <p>> Statut: <span class="blink-red">NON_AUTHENTIFIÉ</span></p>
                    </div>
                    
                    <div class="auth-buttons">
                        <a href="inscription.php" class="cyber-button neon-blue">
                            <i class="fas fa-user-plus"></i>
                            NOUVEAU PROTOCOLE
                        </a>
                        <a href="connexion.php" class="cyber-button neon-green">
                            <i class="fas fa-terminal"></i>
                            ACCÈS EXISTANT
                        </a>
                    </div>
                </div>
            <?php endif; ?>
        </main>

        <footer class="cyber-footer">
            <div class="footer-grid">
                <div class="footer-item">
                    <span class="footer-label">SYSTEME:</span>
                    <span class="footer-value">CYBERAUTH v3.2.1</span>
                </div>
                <div class="footer-item">
                    <span class="footer-label">STATUT:</span>
                    <span class="footer-value <?php echo $isLoggedIn ? 'cyberpunk-green' : 'cyberpunk-red'; ?>">
                        <?php echo $isLoggedIn ? 'SÉCURISÉ' : 'EN ALERTE'; ?>
                    </span>
                </div>
            </div>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>