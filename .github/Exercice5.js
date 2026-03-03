let nombres = [
    0, 
    NaN, 
    Infinity, 
    -Infinity, 
    42, 
    3.14, 
    Number.MAX_SAFE_INTEGER + 1, 
    -0
];

nombres.forEach(valeur => {
    let categorie = "";

    if (Number.isNaN(valeur)) {
        categorie = "INVALIDE";
    } 
    else if (valeur === Infinity || valeur === -Infinity) {
        categorie = "INFINI";
    } 
    else if (valeur === 0 && (1 / valeur === -Infinity)) {
        categorie = "ZERO NEGATIF";
    } 
    else if (Number.isInteger(valeur)) {
        if (Number.isSafeInteger(valeur)) {
            categorie = "ENTIER SUR";
        } else {
            categorie = "ENTIER HORS LIMITES";
        }
    } 
    else {
        categorie = "DECIMAL";
    }

    console.log(valeur + " -> " + categorie);
});