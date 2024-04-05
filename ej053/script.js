// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();

document.querySelector("#badcode").innerHTML =
  "const outerWear = 'T-Shirt'; " +
  "function myOutfit() { <br>" +
  "  const outerWear ='sweater'; <br> " +
  " return outerWear; <br>" +
  "} <br>";
document.querySelector("#goodcode").innerHTML =
  "const outerWear = 'T-Shirt'; " +
  "function myOutfit() { <br>" +
  " return outerWear; <br>" +
  "} <br>";
