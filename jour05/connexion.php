<?php
session_start();
if (isset($_SESSION['user'])) {
    header('Location: index.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CyberAuth - Connexion</title>
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
            <p class="cyber-subtitle">PROTOCOLE DE CONNEXION</p>
        </header>

        <main class="main-content">
            <div class="cyber-card login-card">
                <div class="card-header">
                    <h2 class="neon-text">
                        <i class="fas fa-terminal"></i>
                        ACCÈS SYSTÈME
                    </h2>
                    <p class="card-subtitle">IDENTIFIEZ-VOUS POUR CONTINUER</p>
                </div>
                
                <form id="loginForm" class="cyber-form">
                    <div class="form-group">
                        <label for="email" class="cyber-label">
                            <i class="fas fa-at"></i>
                            ADRESSE ÉLECTRONIQUE
                        </label>
                        <div class="input-container">
                            <input type="email" id="email" name="email" class="cyber-input" 
                                   placeholder="user@cybercorp.net" required>
                            <div class="input-glow"></div>
                        </div>
                        <div class="error-message" id="email-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="password" class="cyber-label">
                            <i class="fas fa-key"></i>
                            CODE D\'ACCÈS
                        </label>
                        <div class="input-container">
                            <input type="password" id="password" name="password" class="cyber-input" 
                                   placeholder="••••••••" required>
                            <div class="input-glow"></div>
                            <button type="button" class="show-password" id="showPassword">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="error-message" id="password-error"></div>
                    </div>
                    
                    <button type="submit" class="cyber-button neon-green submit-btn">
                        <i class="fas fa-sign-in-alt"></i>
                        INITIER LA CONNEXION
                        <span class="button-glow"></span>
                    </button>
                    
                    <div class="form-links">
                        <a href="index.php" class="cyber-link">
                            <i class="fas fa-arrow-left"></i>
                            RETOUR AU SYSTÈME
                        </a>
                        <a href="inscription.php" class="cyber-link">
                            <i class="fas fa-user-plus"></i>
                            CRÉER UN PROTOCOLE
                        </a>
                    </div>
                </form>
                
                <div class="terminal-output" id="login-response">
                    <p>> En attente d\'authentification...</p>
                </div>
            </div>
        </main>

        <footer class="cyber-footer">
            <div class="footer-grid">
                <div class="footer-item">
                    <span class="footer-label">ACCÈS:</span>
                    <span class="footer-value cyberpunk-yellow">CONNEXION</span>
                </div>
            </div>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>
