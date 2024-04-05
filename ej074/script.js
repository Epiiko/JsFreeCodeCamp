function testSize(num) {
    // Only change code below this line
    if(num<5){
      return "Tiny"
    }else if(num<10){
      return "Small"
    }else if(num<15){
      return "Medium"
    }else if(num<20){
      return "Large"
    }else{
      return "Huge"
    }
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);
  document.querySelector("#badcode").innerHTML =
  "Sin contenido";
  document.querySelector("#goodcode").innerHTML =
  " if (num < 5) {<br> "+
  "       return 'Tiny'; <br>"+
  "}else if(num<10) { <br>" +
  "return 'Small'; <br>"+
  "}else if (num < 15) {<br> "+
  "return 'Medium'; <br>"+
  "}else if(val<20) { <br>" +
  "return 'Large'; <br>"
  "}else{ <br>" +
  "return 'Huge'; <br> {"