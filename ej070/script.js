function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case "a": 
      answer="apple";
      break;
      case "b":
      answer="bird";
      break;
      case "c":
      answer="cat";
      break;
      default:
      answer="stuff"
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

  document.querySelector("#badcode").innerHTML =
" if (val){ <br> return 'Outside' }<br> if(val) { return 'Outside' }" + "return 'Yes'; <br> { <br> {" ;
document.querySelector("#goodcode").innerHTML =
" if (val<10 || val>20){ <br> return 'Outside' <br> } else {  <br> return 'Inside' <br> }" ;