function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val){
    case "bob": 
    answer= "Marley";
    break;
    case 42:
    answer="The Answer"
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99: 
    answer = "Missed me by this much!"
    break;
    case 7:
    answer = "Ate Nine";
    break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
document.querySelector("#badcode").innerHTML = "Sin contenido";
document.querySelector("#goodcode").innerHTML =
  " switch (val){<br> " +
  "       case 'bob':  <br>" +
  "       answer= 'Marley'; <br>" +
  "       break; <br>" +
  "       case 42:  <br>" +
  "       answer= 'The answer'; <br>" +
  "       break; <br>" +
  "       case 1:  <br>" +
  "       answer= 'There is no no #1; <br>" +
  "       break; <br>" +
  "       case 99:  <br>" +
  "       answer= 'Missed me by this much1!'; <br>" +
  "       break; <br>" +
  "       case 7:  <br>" +
  "       answer= 'Ate nine'; <br>" +
  "       break; <br>";
  
  document.querySelector('#goodcode').setAttribute('Style' , 'font-size : 10px')