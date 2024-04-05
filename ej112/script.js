function checkSign(num) {
    return num<0?"negative":num==0?"zero":"positive"
   }
   checkSign(10);
   
  document.querySelector("#badcode").innerHTML =
  "function checkSign(num){<br>}";
  document.querySelector("#goodcode").innerHTML =
  "  function checkSign(num){ <br>"+
  "    return num<0?'negative':num==0?'zero':'positive' <br>} ";
  