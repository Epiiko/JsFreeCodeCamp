function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
  document.querySelector("#badcode").innerHTML =
  " if (val < 10) {<br> "+
  "       return 'Less than 10';"+
  "<br> else if(val<5) { <br>" +
  "return 'Less than 5'; <br>"+
  " }else{ <br>" + 
  " return 'Greater than or equal to 10';<br>{"
  document.querySelector("#goodcode").innerHTML =
  " if (val < 5) {<br> "+
  "       return 'Less than 5';"+
  "<br> else if(val<10) { <br>" +
  "return 'Less than 10'; <br>"+
  " }else{ <br>" + 
  " return 'Greater than or equal to 10';<br>{"