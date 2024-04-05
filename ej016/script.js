let myVar = 11;
myVar++;

document.querySelector("#badcode").innerHTML = "let myVar = 11; <br> myVar = myVar - 1";
document.querySelector("#goodcode").innerHTML =
"let myVar = 11; <br> myVar --";