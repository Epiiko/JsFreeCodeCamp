// Setup
const myArray = [];
 for (let i =1; i<=5; i++){
   myArray.push(i);
 }
// Only change code below this line
document.querySelector("#badcode").innerHTML =
"const myArray = []; Rellena el array con un for del 1-5 inclusivos";
document.querySelector("#goodcode").innerHTML =
" const myArray = [];<br> " +
"  for (let i =1; i<=5; i++){ <br>" +
"   myArray.push(i); <br>" +
"   } ";
