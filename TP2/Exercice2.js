let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let element = valeurs[i];
    let label;
    let resultat;

    
    if (element === "") {
        label = "(chaine vide)";
    } else {
        label = String(element);
    }

    
    if (element) {
        resultat = "truthy";
    } else {
        resultat = "falsy";
    }

    console.log(label + " -> " + resultat);
}