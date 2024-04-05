let myVar = 87;
myVar++;

document.querySelector("#badcode").innerHTML = "let myVar = 87; <br> myVar = myVar + 1";
document.querySelector("#goodcode").innerHTML =
"let myVar = 87; <br> myVar ++";