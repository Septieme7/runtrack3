function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log("2020 est bisextile ? " + bisextile(2020));
console.log("2021 est bisextile ? " + bisextile(2021));
console.log("2000 est bisextile ? " + bisextile(2000));
console.log("1900 est bisextile ? " + bisextile(1900));
