function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }else{
      result = "5 or Smaller";
    }
  
    
   
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  
  document.querySelector("#badcode").innerHTML =
  " if (val > 5) {<br> "+
  "    result = 'Bigger than 5'; }"+
  "<br> if (val<5) { " +
  "result = '5 or Smaller'; <br>"+
  "}<br>" ;
  document.querySelector("#badcode").innerHTML =
  " if (val > 5) {<br> "+
  "    result = 'Bigger than 5'; }"+
  "<br> else { " +
  "result = '5 or Smaller'; <br>"+
  "}<br>" ;