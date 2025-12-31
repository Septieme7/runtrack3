// Gestionnaire des formulaires avec validation en temps réel

document.addEventListener('DOMContentLoaded', function() {
    // ===== INSCRIPTION =====
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        // Validation en temps réel
        const prenomInput = document.getElementById('prenom');
        const nomInput = document.getElementById('nom');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm_password');
        
        // Afficher/masquer mot de passe
        const showPassword1 = document.getElementById('showPassword1');
        const showPassword2 = document.getElementById('showPassword2');
        
        if (showPassword1) {
            showPassword1.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
            });
        }
        
        if (showPassword2) {
            showPassword2.addEventListener('click', function() {
                const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                confirmPasswordInput.setAttribute('type', type);
                this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
            });
        }
        
        // Validation en temps réel
        [prenomInput, nomInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
            if (input) {
                input.addEventListener('input', validateRegisterField);
                input.addEventListener('blur', validateRegisterField);
            }
        });
        
        // Soumission du formulaire
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateRegisterForm()) {
                submitRegisterForm();
            }
        });
    }
    
    // ===== CONNEXION =====
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Afficher/masquer mot de passe
        const showPassword = document.getElementById('showPassword');
        const passwordInput = document.getElementById('password');
        
        if (showPassword && passwordInput) {
            showPassword.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
            });
        }
        
        // Soumission du formulaire
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitLoginForm();
        });
    }
});

// ===== FONCTIONS DE VALIDATION =====

function validateRegisterField(e) {
    const field = e.target;
    const fieldName = field.name;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    switch(fieldName) {
        case 'prenom':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Le prénom doit contenir au moins 2 caractères';
            }
            break;
            
        case 'nom':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Le nom doit contenir au moins 2 caractères';
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Format d\'email invalide';
            }
            break;
            
        case 'password':
            if (value.length < 8) {
                isValid = false;
                errorMessage = 'Minimum 8 caractères';
            } else if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])/.test(value)) {
                isValid = false;
                errorMessage = 'Doit contenir une lettre, un chiffre et un caractère spécial';
            }
            break;
            
        case 'confirm_password':
            const password = document.getElementById('password').value;
            if (value !== password) {
                isValid = false;
                errorMessage = 'Les mots de passe ne correspondent pas';
            }
            break;
    }
    
    const errorElement = document.getElementById(fieldName + '-error');
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = isValid ? 'none' : 'block';
    }
    
    return isValid;
}

function validateRegisterForm() {
    let isValid = true;
    
    const fields = ['prenom', 'nom', 'email', 'password', 'confirm_password'];
    fields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            const event = new Event('blur');
            field.dispatchEvent(event);
            if (field.style.borderColor === 'var(--neon-red)') {
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// ===== SOUMISSION DES FORMULAIRES =====

function submitRegisterForm() {
    const form = document.getElementById('registerForm');
    const submitBtn = form.querySelector('.submit-btn');
    const responseDiv = document.getElementById('register-response');
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ENREGISTREMENT...';
    submitBtn.disabled = true;
    
    const formData = new FormData(form);
    formData.append('action', 'register');
    
    fetch('auth.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseDiv.innerHTML = '';
        
        if (data.success) {
            responseDiv.innerHTML = `
                <p class="cyberpunk-green">>> ${data.message}</p>
                <p>> Redirection vers la connexion...</p>
            `;
            responseDiv.style.borderLeftColor = 'var(--neon-green)';
            
            setTimeout(() => {
                window.location.href = 'connexion.php';
            }, 2000);
        } else {
            responseDiv.innerHTML = `<p class="cyberpunk-red">>> ERREUR: ${data.message}</p>`;
            responseDiv.style.borderLeftColor = 'var(--neon-red)';
            
            // Afficher les erreurs spécifiques
            if (data.errors) {
                for (const [field, error] of Object.entries(data.errors)) {
                    const errorElement = document.getElementById(field + '-error');
                    if (errorElement) {
                        errorElement.textContent = error;
                        errorElement.style.display = 'block';
                    }
                }
            }
        }
        
        submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> ENREGISTRER LE PROTOCOLE';
        submitBtn.disabled = false;
    })
    .catch(error => {
        responseDiv.innerHTML = `<p class="cyberpunk-red">>> ERREUR SYSTÈME: ${error.message}</p>`;
        submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> ENREGISTRER LE PROTOCOLE';
        submitBtn.disabled = false;
    });
}

function submitLoginForm() {
    const form = document.getElementById('loginForm');
    const submitBtn = form.querySelector('.submit-btn');
    const responseDiv = document.getElementById('login-response');
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> CONNEXION...';
    submitBtn.disabled = true;
    
    const formData = new FormData(form);
    formData.append('action', 'login');
    
    fetch('auth.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseDiv.innerHTML = '';
        
        if (data.success) {
            responseDiv.innerHTML = `
                <p class="cyberpunk-green">>> ${data.message}</p>
                <p>> Accès autorisé, redirection...</p>
            `;
            responseDiv.style.borderLeftColor = 'var(--neon-green)';
            
            setTimeout(() => {
                window.location.href = data.redirect || 'index.php';
            }, 1500);
        } else {
            responseDiv.innerHTML = `<p class="cyberpunk-red">>> ÉCHEC: ${data.message}</p>`;
            responseDiv.style.borderLeftColor = 'var(--neon-red)';
            
            // Afficher les erreurs spécifiques
            if (data.errors) {
                for (const [field, error] of Object.entries(data.errors)) {
                    const errorElement = document.getElementById(field + '-error');
                    if (errorElement) {
                        errorElement.textContent = error;
                        errorElement.style.display = 'block';
                    }
                }
            }
        }
        
        submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> INITIER LA CONNEXION';
        submitBtn.disabled = false;
    })
    .catch(error => {
        responseDiv.innerHTML = `<p class="cyberpunk-red">>> ERREUR SYSTÈME: ${error.message}</p>`;
        submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> INITIER LA CONNEXION';
        submitBtn.disabled = false;
    });
}

// Effets cyberpunk supplémentaires
document.addEventListener('DOMContentLoaded', function() {
    // Effet de frappe au clavier
    const inputs = document.querySelectorAll('.cyber-input');
    inputs.forEach(input => {
        input.addEventListener('keydown', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.3s';
            }, 10);
        });
    });
    
    // Effet hover sur les boutons
    const buttons = document.querySelectorAll('.cyber-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const audio = document.getElementById('hover-sound');
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch(e => console.log('Audio error:', e));
            }
        });
    });
});
