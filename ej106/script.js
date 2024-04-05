function randomFraction() {

    // Only change code below this line
  
    return Math.random()*3;
  
    // Only change code above this line
  }
document.querySelector("#badcode").innerHTML =
  "function randomFraction() {return 0;}";
document.querySelector("#goodcode").innerHTML =
  " function randomFraction() {<br> " +
  " return Math.random()*3;<br>} ";
