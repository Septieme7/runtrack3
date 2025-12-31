<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root"; // À adapter
$password = ""; // À adapter
$dbname = "utilisateurs";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les utilisateurs
$sql = "SELECT id, nom, prenom, email FROM utilisateurs";
$result = $conn->query($sql);

$users = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

$conn->close();

// Envoyer en JSON
header('Content-Type: application/json');
echo json_encode($users);
?>
