// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 10);

document.querySelector("#badcode").innerHTML =
  " while (i < 5) {  <br> " +
  "let product = 1;<br> " +
  "  myArray.push(i); <br>" +
  "      i++; <br>" +
  " } ";
document.querySelector("#goodcode").innerHTML =
  "do { <br> " +
  "  myArray.push(i);<br> " +
  "      i++; <br>" +
  " } while (i<10)";
