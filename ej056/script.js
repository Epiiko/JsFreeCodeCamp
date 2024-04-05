function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  document.querySelector("#badcode").innerHTML =
  "Mucho contenido (Crea una funcion que añada 5 a la variable sum)";
  document.querySelector("#goodcode").innerHTML =
  "Line 3: arr.push(item) <br> " + 
  "Line 4: return arr.shift();";