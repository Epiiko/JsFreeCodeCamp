// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
// Only change code below this line

document.querySelector("#badcode").innerHTML =
  "const myArray = [['John', 23], ['cat', 2]];"

  document.querySelector("#goodcode").innerHTML =
  "const myArray = [['John', 23], ['cat', 2]]; <br> " +
  " myArray.push(['dog', 3]) ;" 
