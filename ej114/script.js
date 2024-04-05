function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) return [];
    return [startNum, ...rangeOfNumbers(startNum+1, endNum)];
  };
  document.querySelector("#badcode").innerHTML =
"function rangeOfNumbers(startNum, endNum) {<br>}";
document.querySelector("#goodcode").innerHTML =
"  function rangeOfNumbers(startNum, endNum) { <br>"+
"   if (startNum > endNum) return []; <br>"+
"   return [startNum, ...rangeOfNumbers(startNum+1, endNum)]; <br>} ";
