// Setup
const myArray = [];
 let i=5;
  while(i>=0){
    myArray.push(i);
    i--;
  }
// Only change code below this line
document.querySelector("#badcode").innerHTML =
"const myArray = []; Rellena el array con un while del 5-0 inclusivos";
document.querySelector("#goodcode").innerHTML =
" const myArray = [];<br> " +
"  let i=5; <br>" +
"   while(i>=0){ <br>" +
" myArray.push(i); <br>" +
"  i--; <br> " +
"   } ";
