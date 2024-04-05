function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  
  
  }
  
  testElseIf(7);
  document.querySelector("#badcode").innerHTML =
  " if (val > 10) {<br> "+
  "       return 'Smaller than 5';"+
  "<br> if(val<5) { <br>" +
  "return 'Smaller than 5'; <br>"+
  " } <br>" + 
  " return 'Between 5 and 10'"
  document.querySelector("#goodcode").innerHTML =
  " if (val > 5) {<br> "+
  "    result = 'Bigger than 5'; <br> }"+
  "<br> else if(val <5) { <br>" +
  "result = '5 or Smaller'; <br>"+
  "}else{<br>" +
  " return 'Between 5 and 10' <br> {"