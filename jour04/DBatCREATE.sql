-- Pour créer la base de données (Job 04), ouvre phpMyAdmin et exécute :

CREATE DATABASE utilisateurs;
USE utilisateurs;

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO utilisateurs (nom, prenom, email) VALUES
('Dupont', 'Jean', 'jean.dupont@email.com'),
('Martin', 'Sophie', 'sophie.martin@email.com'),
('Bernard', 'Pierre', 'pierre.bernard@email.com');