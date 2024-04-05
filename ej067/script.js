function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

  document.querySelector("#badcode").innerHTML =
  "Line 2: if (val) {<br>" + 
  "Line 6: if (val) {<br>"
  document.querySelector("#goodcode").innerHTML =
  "Line 2: if (val<=12) {<br>" + 
  "Line 6: if (val<=24) {<br>"