function randomRange(myMin, myMax) {
    return Math.floor(Math.random()* (myMax-myMin +1))+myMin
  }
  
document.querySelector("#badcode").innerHTML =
" function randomRange(myMin, myMax) {return 0;}";
document.querySelector("#goodcode").innerHTML =
" function randomRange(myMin, myMax) {<br> " +
" return Math.floor(Math.random()* (myMax-myMin +1))+myMin <br>} ";
