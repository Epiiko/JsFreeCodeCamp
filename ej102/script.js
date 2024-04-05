function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // return arr.flat().reduce((ac,cv)=>ac*cv); 
    //El flat nos deja la matriz en modo array quitando 1 nivel de    anidamiento, y con el reduce realizamos la multiplicacion de cada uno de los elementos
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  document.querySelector("#badcode").innerHTML =
  "function multiplyAll(arr) {} Recorre la matriz y realiza una multiplicación de los elementos del array";
document.querySelector("#goodcode").innerHTML =
  " function multiplyAll(arr) {<br> " +
  "let product = 1;<br> " +
  "  for (let i = 0; i < arr.length; i++) { <br>" +
  "     for (let j = 0; j < arr[i].length; j++) { <br>" +
  "    product *= arr[i][j]; <br> } } <br> " + 
  " return product <br> }"
