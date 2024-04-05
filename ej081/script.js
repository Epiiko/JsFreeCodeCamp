// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) return undefined;
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
document.querySelector("#badcode").innerHTML =
  " function abTest(a, b) {<br> " +
  "           return Math.round(Math.pow <br> (Math.sqrt(a) + Math.sqrt(b), 2));}  <br>" +
  "    //contenido aqui <br>  } ";
document.querySelector("#goodcode").innerHTML =
  " function abTest(a, b) {<br> " +
  "           return Math.round(Math.pow <br> (Math.sqrt(a) + Math.sqrt(b), 2));}  <br>" +
  "      if (a < 0 || b < 0) return undefined; <br>  } ";
