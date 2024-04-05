//RECURSIVIDAD MAL
function sum(arr, n) {
    // Only change code below this line
    if (n >= 0) return 0;
      return sum(arr, n-1) + arr[n-1];
        }
  
    // Only change code above this line
  document.querySelector("#badcode").innerHTML =
  "function sum(arr, n) {<br>}";
  document.querySelector("#goodcode").innerHTML =
  "  function sum(arr, n) { <br>"+
  "    if (n >= 0) return 0; <br>"+
  "   return sum(arr, n-1) + arr[n-1]; <br>} ";
  