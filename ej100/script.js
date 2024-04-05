// Setup
const myArr = [2, 3, 4, 5, 6];
let total=0;
 for(let i=0; i<myArr.length;i++){
   total+=myArr[i];
 }
// Only change code below this line
document.querySelector("#badcode").innerHTML =
"const myArray = [2, 3, 4, 5, 6]; Recorre el array y realiza un sumatorio del array";
document.querySelector("#goodcode").innerHTML =
" const myArray = [];<br> " +
"let total=0;<br> " +
"  for(let i=0; i<myArray.length;i++){ <br>" +
"     if(i%2!==0)myArray.push(i);<br>" +
"    total+=myArray[i]; <br> } ";