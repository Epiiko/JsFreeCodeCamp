function convertToInteger(str) {
    return parseInt(str, 2)
  }
  convertToInteger("10011");

  document.querySelector("#badcode").innerHTML =
  "function convertToInteger(str) {return 0;}";
  document.querySelector("#goodcode").innerHTML =
  "function convertToInteger(str) {<br> " +
  " return parseInt(str,2) <br>} ";
  