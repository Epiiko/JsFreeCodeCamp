function isLess(a, b) {
    // Only change code below this line
    return a<b;
    // Only change code above this line
  }
  
  isLess(10, 15);
  document.querySelector("#goodcode").innerHTML = 
   " function isLess(a, b) { <br> " +
  "           return a < b  <br>" +
  "      } " ;
  document.querySelector("#badcode").innerHTML =
  " function isLess(a, b) { <br> " +
  "       if (a < b) {  <br>" +
  "      return true; <br>" +
  "        } else { <br>" +
  "           return false  <br>" +
  "      } <br> } " ;