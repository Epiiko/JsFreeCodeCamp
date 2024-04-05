// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);


  compareEquality(10, "10");
  document.querySelector("#badcode").innerHTML =
  "Line 3: if (val) {";
  document.querySelector("#goodcode").innerHTML =
  "Line 3: if (val!=99) {";