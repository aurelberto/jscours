//Exemple de variable

let jambon = "Jambon"; // variable modifiable
const pi = 3.1415926; // constante non modifiable
var age = 25; //variable modifiable a fort taux d'erreurs, NE SURTOUT PAS L'UTILISER!!!!

//Les règles de déclaration

let a = 12;
console.log(a);
a = 4;
//Ne pas remettre let devant une variable, car cela voudrait dire qu'on la redeclare
// pour la modifier il suffit de l'appeler par son nom, et de mettre = ensuite sa nouvelle valeure
console.log(a);
const tau = 6.28318
console.log(tau);
//Les constantes n'acceptent pas d'autres valeurs que celles déclarées.
//tau = 7
//Les deux lignes ci-dessus feront buggés le script

var b = 40;
console.log(b);
var b = 50;
console.log(b)
//Les var peuvent être redéclarés causant de gros problèmes de lisibilité.

//Typage dynamique

let k = "Coucou tu veux voir ma bicyclette"
console.log(k)
k = 16.2;

// Type de données

//Les nombres = Number

let q = 2; // nombres entier
let p = 45.32; // nombre décimal flottant.
let r = -273; // nombre négatif.
let s = 1/3; //fraction
let t = 16_000; 

// Les chaînes de caractères ou les strings

const corneille = "Ingrat, rends-moi mon CID jusques au dernier mot.";
const moliere = 'Votre sang, monsieur, n\'est pas tombé dans de mauvaises mains.';
console.log(moliere);
let blague = `c'est une autruche qui rentre dans un bar ...`;

// Les booléens

const vrai = true;
const jesuisfaux = false;

// Les tableaux = Array

const eleves = ["Autruche", "Joconde", 4, true];
console.log(eleves);
console.log(eleves[2]);
console.log(eleves[0]);
console.log(eleves[4]); //underfines, on sort des limites du tableau.
// Les tableaux n'ont pas d'index négatifs.
// Les tableaux commencent toujours par l'index 0 et finissent toujours par l'index égale à la taille du tableau -1.


// Les underfined

let d;
console.log(d);
// La variable a été déclarée, mais elle n'a aucune valeur, alors le JS la déclare indéfinie.
// ou par exemple en sortant des limites d'un tableau ou en ciblant un élément HTML mal écrit.
// Ce type de données est à éviter ABSOLUMENT!

//Les nulles => NULL
let x = null;

// Les objets

const tasse = {
    color: "rouge",
    material: "céramique",
    price: 1,
    content_volume: 25
}