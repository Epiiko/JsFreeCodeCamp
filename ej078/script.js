function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
      case 2:
      case 3:
      answer = "Low"
      break;
      case 4:
      case 5:
      case 6:
      answer= "Mid"
      break;
      case 7:
      case 8:
      case 9:
      answer= "High"
      break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

document.querySelector("#badcode").innerHTML = "Sin contenido";
document.querySelector("#goodcode").innerHTML =
  " switch (val){<br> " +
  "       case 1: <br>" +
  "       case 2: <br>" +
  "       case 3: <br>" +
  "   answer='Low';<br>" +
  "   break; <br>" +
  "       case 4: <br>" +
  "       case 5: <br>" +
  "       case 6: <br>" +
  "   answer='Mid';<br>" +
  "   break; <br>" +
  "       case 7: <br>" +
  "       case 8: <br>" +
  "       case 9: <br>" +
  "   answer='High';<br>" +
  "   break; <br>";
  
  
  document.querySelector('#goodcode').setAttribute('Style' , 'font-size : 10px')