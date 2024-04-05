// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

  document.querySelector("#badcode").innerHTML =
"Line 3: if (val) {";
document.querySelector("#goodcode").innerHTML =
"Line 3: if (val===7) {";