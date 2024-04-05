function randomWholeNum() {
    return Math.floor(Math.random()*10);
  }

document.querySelector("#badcode").innerHTML =
  "function randomWholeNum() {return 0;}";
document.querySelector("#goodcode").innerHTML =
  " function randomWholeNum() {<br> " +
  " return Math.floor(Math.random()*10);<br>} ";
