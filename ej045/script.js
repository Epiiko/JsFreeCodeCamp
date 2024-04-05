// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];
var removedFromMyArray = myArray.pop();
// Only change code below this line
document.querySelector("#badcode").innerHTML =
  "const myArray = [['John', 23], ['cat', 2]];";

document.querySelector("#goodcode").innerHTML =
  "const myArray = [['John', 23], ['cat', 2]]; <br> " +
  "var removedFromMyArray = myArray.pop(); ;";
