function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
  document.querySelector("#badcode").innerHTML =
  "Line 2: if (val) {<br>" + 
  "Line 6: if (val) {<br>"
  document.querySelector("#goodcode").innerHTML =
  "Line 2: if (val>=20) {<br>" + 
  "Line 6: if (val>=10) {<br>"