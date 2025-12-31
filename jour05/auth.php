<?php
session_start();
require_once 'db.php';

header('Content-Type: application/json');

$db = Database::getInstance();
$conn = $db->getConnection();

$response = ['success' => false, 'message' => '', 'errors' => []];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    
    if ($action === 'register') {
        $prenom = trim($_POST['prenom'] ?? '');
        $nom = trim($_POST['nom'] ?? '');
        $email = trim($_POST['email'] ?? '');
        $password = $_POST['password'] ?? '';
        $confirm_password = $_POST['confirm_password'] ?? '';
        
        $errors = [];
        
        if (strlen($prenom) < 2) {
            $errors['prenom'] = 'Le prénom doit contenir au moins 2 caractères';
        }
        
        if (strlen($nom) < 2) {
            $errors['nom'] = 'Le nom doit contenir au moins 2 caractères';
        }
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Format d\'email invalide';
        } else {
            $stmt = $conn->prepare("SELECT id FROM utilisateurs WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->store_result();
            
            if ($stmt->num_rows > 0) {
                $errors['email'] = 'Cet email est déjà utilisé';
            }
            $stmt->close();
        }
        
        if (strlen($password) < 8) {
            $errors['password'] = 'Le mot de passe doit contenir au moins 8 caractères';
        } elseif (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/', $password)) {
            $errors['password'] = 'Le mot de passe doit contenir au moins une lettre, un chiffre et un caractère spécial';
        }
        
        if ($password !== $confirm_password) {
            $errors['confirm_password'] = 'Les mots de passe ne correspondent pas';
        }
        
        if (empty($errors)) {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            
            $stmt = $conn->prepare("INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $nom, $prenom, $email, $hashed_password);
            
            if ($stmt->execute()) {
                $response['success'] = true;
                $response['message'] = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
            } else {
                $response['message'] = 'Erreur lors de l\'inscription';
            }
            $stmt->close();
        } else {
            $response['errors'] = $errors;
            $response['message'] = 'Veuillez corriger les erreurs';
        }
        
    } elseif ($action === 'login') {
        $email = trim($_POST['email'] ?? '');
        $password = $_POST['password'] ?? '';
        
        $errors = [];
        
        if (empty($email)) {
            $errors['email'] = 'L\'email est requis';
        }
        
        if (empty($password)) {
            $errors['password'] = 'Le mot de passe est requis';
        }
        
        if (empty($errors)) {
            $stmt = $conn->prepare("SELECT id, nom, prenom, email, password FROM utilisateurs WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows === 1) {
                $user = $result->fetch_assoc();
                
                if (password_verify($password, $user['password'])) {
                    $_SESSION['user'] = [
                        'id' => $user['id'],
                        'nom' => $user['nom'],
                        'prenom' => $user['prenom'],
                        'email' => $user['email']
                    ];
                    
                    $response['success'] = true;
                    $response['message'] = 'Connexion réussie !';
                    $response['redirect'] = 'index.php';
                } else {
                    $errors['password'] = 'Mot de passe incorrect';
                }
            } else {
                $errors['email'] = 'Aucun compte trouvé avec cet email';
            }
            
            $stmt->close();
        }
        
        if (!empty($errors)) {
            $response['errors'] = $errors;
            $response['message'] = 'Échec de la connexion';
        }
    }
}

echo json_encode($response);
?>
