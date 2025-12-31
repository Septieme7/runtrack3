function estNombrePremier(nombre) {
    if (nombre < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    
    return true;
}

function sommenombrespremiers(a, b) {
    if (estNombrePremier(a) && estNombrePremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

console.log("=== Tests sommenombrespremiers ===");
console.log("somme(2, 3) = " + sommenombrespremiers(2, 3));
console.log("somme(5, 7) = " + sommenombrespremiers(5, 7));
console.log("somme(4, 7) = " + sommenombrespremiers(4, 7));
console.log("somme(11, 13) = " + sommenombrespremiers(11, 13));
console.log("somme(1, 7) = " + sommenombrespremiers(1, 7));
