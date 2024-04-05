// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);


document.querySelector("#badcode").innerHTML =
  "const myArray = [['John', 23], ['cat', 2]];<br>" +
  "myArray.shift()";


  document.querySelector("#goodcode").innerHTML =
  "const myArray = [['John', 23], ['cat', 2]];<br>" +
  "myArray.shift() <br>" + 
  "myArray.unshift(['Paul',35])";