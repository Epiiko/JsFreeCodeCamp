function checkEqual(a, b) {
    return a==b?"Equal":"Not Equal";
  }
  
  checkEqual(1, 2);

  document.querySelector("#badcode").innerHTML =
  "function checkEqual(a, b) <br>{<br>}";
  document.querySelector("#goodcode").innerHTML =
  "  function checkEqual(a, b){ <br>"+
  "   return a==b?'Equal':'Not Equal'; <br>} ";
  