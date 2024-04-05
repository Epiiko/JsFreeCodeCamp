var nombre="Nacho";
var nombreDeCopia=nombre;
//nombreDeCopia tiene el valor que contiene la variable nombre

document.querySelector("#badcode").innerHTML="var a; <br> a = 7; <br> var b;"
document.querySelector("#goodcode").innerHTML="var a; <br> a = 7; <br> var b;<br> b = a;"