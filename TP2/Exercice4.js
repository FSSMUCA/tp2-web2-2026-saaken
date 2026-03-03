const paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let differenceCount = 0;

paires.forEach(paire => {
    let v1 = paire[0];
    let v2 = paire[1];

    let resDouble = v1 == v2;
    let resTriple = v1 === v2;

    // Incrémentation si == est true et === est false
    if (resDouble && !resTriple) {
        differenceCount++;
    }

    // Formatage spécial pour l'affichage visuel des chaînes
    let label1 = typeof v1 === "string" ? `"${v1}"` : v1;
    let label2 = typeof v2 === "string" ? `"${v2}"` : v2;
    
    // Ajustement spécifique pour coller au format " \t\n " et les chaînes vides
    if (v1 === "") label1 = '""';
    if (v2 === "") label2 = '""';

    console.log(`${label1} == ${label2}\t -> ${resDouble}    |   ${label1} === ${label2}\t -> ${resTriple}`);
});

console.log("---");
console.log(`${differenceCount} paire(s) où == et === donnent des résultats différents`);