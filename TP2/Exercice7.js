let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;


let sousTotal = prix * quantite;
console.log("Étape 1 : Sous-total calculé -> " + sousTotal + " MAD");


let aCodePromoValide = (codePromo ?? false) !== false;
let montantReduction = (aCodePromoValide && estMembre) ? (sousTotal * (reductionPourcentage / 100)) : 0;
console.log("Étape 2 : Montant de la réduction -> " + montantReduction + " MAD");


let totalFinal = sousTotal - montantReduction;
console.log("Étape 3 : Total final -> " + totalFinal + " MAD");


let paiementAccepte = soldeCompte >= totalFinal;
let statut = paiementAccepte ? "Paiement accepté" : "Solde insuffisant";
console.log("Étape 4 : " + statut);


let nouveauSolde = paiementAccepte ? (soldeCompte - totalFinal) : soldeCompte;
if (paiementAccepte) {
    console.log("Étape 5 : Nouveau solde après achat -> " + nouveauSolde + " MAD");
}


console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + montantReduction + " MAD");
console.log("Total     : " + totalFinal + " MAD");
console.log("Statut    : " + statut);
console.log("Solde     : " + nouveauSolde + " MAD");
console.log("=========================");