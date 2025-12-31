function jourtravaille(date) {
    const joursFeries2020 = [
        "2020-01-01", "2020-04-13", "2020-05-01", "2020-05-08", 
        "2020-05-21", "2020-06-01", "2020-07-14", "2020-08-15", 
        "2020-11-01", "2020-11-11", "2020-12-25"
    ];
    
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();
    
    const nomsMois = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    
    const dateFormatee = `${annee}-${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}`;
    
    if (joursFeries2020.includes(dateFormatee)) {
        console.log(`Le ${jour} ${nomsMois[mois-1]} ${annee} est un jour férié`);
        return;
    }
    
    const jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} ${nomsMois[mois-1]} ${annee} est un week-end`);
        return;
    }
    
    console.log(`Oui, ${jour} ${nomsMois[mois-1]} ${annee} est un jour travaillé`);
}

console.log("=== Tests jourtravaille ===");
jourtravaille(new Date(2020, 0, 1));
jourtravaille(new Date(2020, 0, 4));
jourtravaille(new Date(2020, 0, 5));
jourtravaille(new Date(2020, 0, 6));
jourtravaille(new Date(2020, 4, 1));
jourtravaille(new Date(2020, 4, 8));
