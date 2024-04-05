function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);
document.querySelector("#badcode").innerHTML = "Sin contenido";
document.querySelector("#goodcode").innerHTML =
  " switch (val){<br> " +
  "       case 'a': <br>" +
  "   answer='apple';<br>" +
  "   break; <br>" +
  "       case 'b': <br>" +
  "   answer='bird';<br>" +
  "   break; <br>" +
  " case 3: <br>" +
  "   answer='cat';<br>" +
  "   break; <br>" +
  "       default: <br>" +
  "   answer='stuff';<br>" +
  "   break; <br> }";
  
  document.querySelector('#goodcode').setAttribute('Style' , 'font-size : 11px')