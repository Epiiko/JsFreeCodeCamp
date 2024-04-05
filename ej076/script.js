function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);
document.querySelector("#badcode").innerHTML = "Sin contenido"
document.querySelector("#goodcode").innerHTML =
  " switch (val){<br> " +
  "       case 1: <br>" +
  "   answer='alpha';<br>" +
  "   break; <br>" +
  "       case 2: <br>" +
  "   answer='beta';<br>" +
  "   break; <br>" +
  " case 3: <br>" +
  "   answer='gamma';<br>" +
  "   break; <br>" +
  "       case 4 <br>" +
  "   answer='delta';<br>" +
  "   break; <br> }";
  document.querySelector('#goodcode').setAttribute('Style' , 'font-size : 11px')