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

const eleve = {
    name: "Jean-Michel",
    age: 18,
    class: "Terminal",
    notes: [13, 18, 19, 2, 16, 15.5]
}

console.log(eleve.name)
//Calcule de la moyenne de Jean-Michel
//En codage naïf.
let moyenne = (eleve.notes[0] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5]) /6
console.log(moyenne)

// OPERATEUR

//L'affectation
//On donne la valeur de 7 à la variable "aa"
let aa = 7

//l'addition
// La valeur 7 est écrasé par l'addition de 12 + 4 donc la variable "aa" est maintenant égal à 16.
aa = 12 + 4;
console.log(aa); // donne 16
//L'affectation aprés l'addition
//Avec cette écriture on n'écrase pas la valeur mais on ajoute 4 à l'ancienne valeur
aa += 4;
console.log(aa); // donne 20

//la soustraction
// La valeur 7 est écrasé par la soustraction de 12 - 4 donc la variable "bb" est maintenant égal à 16.
bb = 20 - 4;
console.log(bb); // donne 16
//L'affectation aprés la soustraction
//Avec cette écriture on n'écrase pas la valeur mais on retire 4 à l'ancienne valeur
bb -= 4;
console.log(bb); // donne 12

//la multiplication
// La valeur 7 est écrasé par la multiplication de 5 * 8 donc la variable "cc" est maintenant égal à 40.
cc = 5 * 8;
console.log(cc); // donne 40
//L'affectation aprés la multiplication
//Avec cette écriture on n'écrase pas la valeur mais on multiplie par 2 à l'ancienne valeur
cc *= 2;
console.log(cc); // donne 80

//la division
// La valeur 7 est écrasé par la division de 5 * 8 donc la variable "dd" est maintenant égal à 5.
dd = 20 / 4;
console.log(dd); // donne 5
//L'affectation aprés la division
//Avec cette écriture on n'écrase pas la valeur mais on divise par 2 à l'ancienne valeur
dd /= 2;
console.log(dd); // donne 2.5

//Les modulo
let ee = 13 % 5
console.log(ee) //donne 3

//l'exponentiel
let ff = 3 ** 2
console.log(ff) // 9

//Les conditions

let gg = 4;
let hh = 4;
let ii = 9;

if (gg == hh) {
    // Si la condition est bien rempli
}else{
    //Si la condition n'est pas rempli
}

//Vérification égalité non strict
if ( 6 == "6"){
    console.log("ca marche")
}

//égalité strict
//L'ÉGALITÉ STRICT VÉRIFIE EN PLUS LE TYPE DE DONNÉES, ici l'égalité est fausse car 6 est un number et "6" est un chaîne de caractère
if ( 6 === "6"){
    /////
}else{

    console.log("ca marche pas")
    }

//on va vérifier si JM est majeur

if(eleve.age >= 18){
    // ici on va faire une concaténation (coller plusieurs chaînes de caractères entre elles) avec le nom de l'elève et un texte descriptif
    console.log(eleve.name + " est bien majeur")
}else{
    //concaténation de littéral de gabarit
    console.log(`${eleve.name} n'est pas majeur`)
}

