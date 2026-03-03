let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

const variables = [
    { nomVar: "nom", val: nom },
    { nomVar: "age", val: age },
    { nomVar: "ville", val: ville },
    { nomVar: "score", val: score },
    { nomVar: "actif", val: actif }
];

const DEFAULT = "valeur par défaut";

console.log("--- Partie A : Opérateur ?? ---");
variables.forEach(v => {
    console.log(`${v.nomVar} ?? "${DEFAULT}"\t-> ${v.val ?? DEFAULT}`);
});

console.log("\n--- Partie B : Opérateur || ---");
variables.forEach(v => {
    console.log(`${v.nomVar} || "${DEFAULT}"\t-> ${v.val || DEFAULT}`);
});

console.log("\n--- Partie C : Comparaison ---");
variables.forEach(v => {
    let resNullish = v.val ?? DEFAULT;
    let resLogicalOr = v.val || DEFAULT;
    let comparaison = (resNullish === resLogicalOr) ? "même résultat" : "résultat différent";
    
    
    let nomAffiche = v.nomVar.padEnd(6);
    console.log(`${nomAffiche} : ?? et || -> ${comparaison}`);
});