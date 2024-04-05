const myArray = [50, 60, 70];
var myData=myArray[0];


document.querySelector("#badcode").innerHTML = "const myArray = [50, 60, 70];";

document.querySelector("#goodcode").innerHTML = "const myArray = [50, 60, 70]; <br> " +
"var myData=myArray[0];";