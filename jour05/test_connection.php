<?php
// test_connection.php
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'utilisateurs';

try {
    $conn = new mysqli($host, $user, $pass, $dbname);
    
    if ($conn->connect_error) {
        die("Erreur connexion : " . $conn->connect_error);
    }
    
    echo "✅ Connexion à MySQL réussie !<br>";
    
    // Tester si la table existe
    $result = $conn->query("SELECT * FROM utilisateurs");
    if ($result) {
        echo "✅ Table 'utilisateurs' trouvée !<br>";
        echo "Nombre d'utilisateurs : " . $result->num_rows;
    } else {
        echo "❌ Table 'utilisateurs' non trouvée";
    }
    
    $conn->close();
} catch (Exception $e) {
    echo "❌ Erreur : " . $e->getMessage();
}
?>