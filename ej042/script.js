// Setup
const myArray = [18, 64, 99];
myArray[0]=45;
// Only change code below this line


document.querySelector("#badcode").innerHTML = "const myArray = [50, 60, 70];";

document.querySelector("#goodcode").innerHTML = "const myArray = [50, 60, 70]; <br> " +
"myArray[0]=45;";