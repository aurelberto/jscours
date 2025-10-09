
const btnAdd = document.getElementById("add");
const btnRemove = document.getElementById("remove");
const btnColor = document.getElementById("color");
const btn4 = document.getElementById("btn4")
let isOn = false;

btn1.addEventListener("click", function() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    const newTexte = document.createTextNode("Nouvel élément");
    newDiv.appendChild(newTexte);
    document.getElementById("container").appendChild(newDiv);
})

btn2.addEventListener("click", function() {
    const newDiv = document.getElementById("container");
    newDiv.removeChild(newDiv.lastChild);
})

btn3.addEventListener("click", function() {
    const newDiv = document.getElementById("container").firstElementChild.style.backgroundColor ='#db2d0fff';
})

btn4.addEventListener("click", function (){
    
    document.getElementById("text")
    
    isOn = !isOn;
    if (isOn) {
      text.innerText = "On";
      text.style.backgroundColor = 'wheat'
      let nombre = Math.floor(Math.random() * 1000) + 2;
      console.log(nombre);
   
      
    } else {
      text.innerText = "Off";
      text.style.backgroundColor = 'red';
      
    }
    
  });
