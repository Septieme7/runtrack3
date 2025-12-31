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
    <title>CyberAuth - Inscription</title>
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
            <p class="cyber-subtitle">NOUVEAU PROTOCOLE UTILISATEUR</p>
        </header>

        <main class="main-content">
            <div class="cyber-card register-card">
                <div class="card-header">
                    <h2 class="neon-text">
                        <i class="fas fa-user-plus"></i>
                        CRÉATION DE PROTOCOLE
                    </h2>
                    <p class="card-subtitle">ENREGISTREZ VOTRE IDENTITÉ NUMÉRIQUE</p>
                </div>
                
                <form id="registerForm" class="cyber-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="prenom" class="cyber-label">
                                <i class="fas fa-id-card"></i>
                                PRÉNOM
                            </label>
                            <div class="input-container">
                                <input type="text" id="prenom" name="prenom" class="cyber-input" 
                                       placeholder="JOHN" minlength="2" required>
                                <div class="input-glow"></div>
                            </div>
                            <div class="error-message" id="prenom-error"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="nom" class="cyber-label">
                                <i class="fas fa-id-badge"></i>
                                NOM
                            </label>
                            <div class="input-container">
                                <input type="text" id="nom" name="nom" class="cyber-input" 
                                       placeholder="DOE" minlength="2" required>
                                <div class="input-glow"></div>
                            </div>
                            <div class="error-message" id="nom-error"></div>
                        </div>
                    </div>
                    
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
                                   placeholder="••••••••" minlength="8" required>
                            <div class="input-glow"></div>
                            <button type="button" class="show-password" id="showPassword1">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="password-rules">
                            <p class="rule-item"><i class="fas fa-microchip"></i> Minimum 8 caractères</p>
                            <p class="rule-item"><i class="fas fa-microchip"></i> Au moins une lettre</p>
                            <p class="rule-item"><i class="fas fa-microchip"></i> Au moins un chiffre</p>
                            <p class="rule-item"><i class="fas fa-microchip"></i> Au moins un caractère spécial</p>
                        </div>
                        <div class="error-message" id="password-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="confirm_password" class="cyber-label">
                            <i class="fas fa-shield-alt"></i>
                            CONFIRMATION DU CODE
                        </label>
                        <div class="input-container">
                            <input type="password" id="confirm_password" name="confirm_password" class="cyber-input" 
                                   placeholder="••••••••" minlength="8" required>
                            <div class="input-glow"></div>
                            <button type="button" class="show-password" id="showPassword2">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="error-message" id="confirm-password-error"></div>
                    </div>
                    
                    <button type="submit" class="cyber-button neon-blue submit-btn">
                        <i class="fas fa-user-plus"></i>
                        ENREGISTRER LE PROTOCOLE
                        <span class="button-glow"></span>
                    </button>
                    
                    <div class="form-links">
                        <a href="index.php" class="cyber-link">
                            <i class="fas fa-arrow-left"></i>
                            RETOUR AU SYSTÈME
                        </a>
                        <a href="connexion.php" class="cyber-link">
                            <i class="fas fa-sign-in-alt"></i>
                            ACCÈS EXISTANT
                        </a>
                    </div>
                </form>
                
                <div class="terminal-output" id="register-response">
                    <p>> Prêt à enregistrer un nouveau protocole...</p>
                </div>
            </div>
        </main>

        <footer class="cyber-footer">
            <div class="footer-grid">
                <div class="footer-item">
                    <span class="footer-label">PROTOCOLE:</span>
                    <span class="footer-value cyberpunk-blue">CRÉATION</span>
                </div>
            </div>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>
