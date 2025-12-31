function tri(numbers, order) {
    const tableauTrie = [...numbers];
    
    if (order !== "asc" && order !== "desc") {
        console.error("Le paramètre order doit être 'asc' ou 'desc'");
        return tableauTrie;
    }
    
    const n = tableauTrie.length;
    let echange;
    
    do {
        echange = false;
        for (let i = 0; i < n - 1; i++) {
            if ((order === "asc" && tableauTrie[i] > tableauTrie[i + 1]) ||
                (order === "desc" && tableauTrie[i] < tableauTrie[i + 1])) {
                const temp = tableauTrie[i];
                tableauTrie[i] = tableauTrie[i + 1];
                tableauTrie[i + 1] = temp;
                echange = true;
            }
        }
    } while (echange);
    
    return tableauTrie;
}

const nombres = [5, 2, 8, 1, 9, 3, 7, 4, 6];

console.log("=== Tests de la fonction tri ===");
console.log("Tableau original: " + nombres);
console.log("Tri ascendant: " + tri(nombres, "asc"));
console.log("Tri descendant: " + tri(nombres, "desc"));
