function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

  document.querySelector("#badcode").innerHTML =
  "Line 2: if (val) {<br>" + 
  "Line 6: if (val) {<br>"
  document.querySelector("#goodcode").innerHTML =
  "Line 2: if (val<25) {<br>" + 
  "Line 6: if (val<55) {<br>"