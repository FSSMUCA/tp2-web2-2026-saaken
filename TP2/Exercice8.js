let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";


let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";

// 2. Age : Conversion et validation
let ageNum = parseInt(age);
let ageStatus = (!Number.isNaN(ageNum) && ageNum > 0) ? `(${ageNum} valide)` : "valeur invalide";


let indexAt = email.indexOf("@");
let indexDot = email.indexOf(".", indexAt);
let emailValide = (indexAt !== -1 && indexDot !== -1) ? "valide" : "invalide : pas de point après @";


let scoreExtrait = parseInt(scoreJeu);
if (Number.isNaN(scoreExtrait)) scoreExtrait = 0;


let estAdminBool = (estAdmin === "true");


let connexionStatus = derniereConnexion ?? "Jamais connecté";


let nbConnexionsNum = Number(nombreConnexions);
let nbConnexionsAffichage = (nbConnexionsNum === 0) ? "Aucune connexion" : nbConnexionsNum;



console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageNum} (valide)`);
console.log(`email            : "${email}" (${emailValide})`);
console.log(`scoreJeu         : ${scoreExtrait} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${estAdminBool} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${connexionStatus}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nbConnexionsAffichage}" (0 après conversion)`);
console.log("================================");