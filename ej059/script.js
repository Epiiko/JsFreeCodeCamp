// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  
document.querySelector("#badcode").innerHTML =
"Line 3: if (val) {";
document.querySelector("#goodcode").innerHTML =
"Line 3: if (val==12) {";