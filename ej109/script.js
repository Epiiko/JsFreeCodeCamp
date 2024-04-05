function convertToInteger(str) {
    return parseInt(str)
  }
  convertToInteger("56");

  document.querySelector("#badcode").innerHTML =
"function convertToInteger(str) {return 0;}";
document.querySelector("#goodcode").innerHTML =
"function convertToInteger(str) {<br> " +
" return parseInt(str) <br>} ";
