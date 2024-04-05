// Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  document.querySelector("#badcode").innerHTML =
  "Line 3: if (val) {";
  document.querySelector("#goodcode").innerHTML =
  "Line 3: if (val!==17) {";