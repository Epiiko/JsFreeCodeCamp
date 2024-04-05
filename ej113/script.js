
  // Only change code below this line
function countdown(n, list){
  if(n<1) return [];
  return [n, ...countdown(n-2, list)];
  }
// Only change code above this line
document.querySelector("#badcode").innerHTML =
"function countdown(n, list){<br>}";
document.querySelector("#goodcode").innerHTML =
"  function countdown(n, list){ <br>"+
"   if(n<1) return []; <br>"+
"    return [n, ...countdown(n-2, list)]; <br>} ";
