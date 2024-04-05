function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }else{
      return "Not Found";
    }
    // Only change code above this line
  }
  document.querySelector("#badcode").innerHTML =
  " function checkObj(obj, checkProp){}";
document.querySelector("#goodcode").innerHTML =
  "   function checkObj(obj, checkProp){<br> " +
  "     if(obj.hasOwnProperty(checkProp)){ <br>" +
  "     return obj[checkProp]; <br>" +
  " }else{ <br>" +
  "     return 'Not Found'; <br>" +
  " } ";
