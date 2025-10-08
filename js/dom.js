const title = document.getElementById("title");
console.log(title);

const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
title.innerHTML = "blblblblbl";
})
let clickNumber = document.getElementById("click-number");

const btn3 = document.getElementById("btn3");


//Evenement avec fonction fléchée à éviter

//btn.addEventListener("click", function(){
//title.innerHTML = "blblblblbl";
//})
console.log(btn);

let click = 0;

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    click++; // est équivalent à click ++1;
    clickNumber.innerHTML = click;
})



btn3.addEventListener("click", function(){
    click--; // est équivalent à click -11;
    clickNumber.innerHTML = click;
})


//avec les input

const inputText = document.getElementById("input-text");
const input1 = document.getElementById("input1");
input1.value = ""
input1.addEventListener("input", function(){
    //console.log(this)
    let valueInput = this.value;
    inputText.innerHTML = valueInput;
})

//HIERARCHIE

const mom = document.getElementById("mom");

//ChildNodes

//Récuperer tous les éléments/noeuds (même le texte)
console.log(mom.childNodes);
//Ici on récupère les éléments à l'interieur de la DIV qui se trouve dans mom
console.log(mom.childNodes[5].childNodes);

//children
//Récupère tous les éléments enfants directs de mom (pas le texte)

console.log(mom.children);

//first child (Prends le texte en compte)

console.log(mom.firstChild);

//FirstElementChild

console.log(mom.firstElementChild);

//On va supprimer le premier li de mom à partir des paramètres précédents

console.log(mom.children[2]. firstElementChild.firstElementChild.remove())

//Création d'un élément
let img = document.createElement("img");
// On modifie son src
img.src = "https://previews.123rf.com/images/captainimages/captainimages1403/captainimages140300222/26708972-close-up-of-one-piece-of-fried-potato-chips-isolated-on-white-background.jpg";
img.alt = "Une belle chips";
img.style.width = "200px";
img.style.heigt = "auto";
//Maintenant que l'on a construit notre image, on peut l'accrocher à un autre élément mais en tant qu'enfant
mom.appendChild(img);
