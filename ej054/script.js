// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
document.querySelector("#badcode").innerHTML =
  "Mucho contenido (Crea una funcion que añada 5 a la variable sum)";
document.querySelector("#goodcode").innerHTML =
  "function addFive(){" + "sum+=5 ; <br>" + " }";
