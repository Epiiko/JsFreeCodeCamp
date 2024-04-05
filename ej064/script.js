function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  document.querySelector("#badcode").innerHTML =
  "Line 2: if (val) {<br>" + 
  "Line 6: if (val) {<br>"
  document.querySelector("#goodcode").innerHTML =
  "Line 2: if (val>100) {<br>" + 
  "Line 6: if (val>10) {<br>"