function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

  
document.querySelector("#badcode").innerHTML =
" if (val){ <br> return 'Outside' }<br> if(val) { return 'Outside' }" + "return 'Yes'; <br> { <br> {" ;
document.querySelector("#goodcode").innerHTML =
" if (val<10 || val>20){ <br> return 'Outside' <br> } else {  <br> return 'Inside' <br> }" ;