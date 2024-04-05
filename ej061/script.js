// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  document.querySelector("#badcode").innerHTML =
  "Line 3: if (a==b) {";
  document.querySelector("#goodcode").innerHTML =
  "Line 3: if (a===b) {";