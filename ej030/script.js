// Only change code below this line
let nombre= "Nacho"
const myName = nombre;
const myStr = "My name is " + myName + " and im well!";

document.querySelector("#badcode").innerHTML = "const myName = ''; <br> " + "const myStr = '';";
document.querySelector("#goodcode").innerHTML = " let nombre= 'Nacho' <br> " + 
"const myName = nombre; <br>" +
"const myStr = 'My name is ' + myName + ' and im well!¡'";