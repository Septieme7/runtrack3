function jsonValueKey(jsonString, key) {
    try {
        const obj = JSON.parse(jsonString);
        return obj[key];
    } catch (error) {
        console.error('Erreur de parsing JSON:', error);
        return null;
    }
}

// Exemple d'utilisation :
const jsonStr = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log(jsonValueKey(jsonStr, "city")); // Affiche "Marseille"
