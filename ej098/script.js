// Setup
const myArray = [];
for(let i=1; i<=9; i++){
  if(i%2!==0)myArray.push(i);
}
// Only change code below this line
document.querySelector("#badcode").innerHTML =
"const myArray = []; Rellena el array con los numeros impares del 1-9 inclusivos";
document.querySelector("#goodcode").innerHTML =
" const myArray = [];<br> " +
"  for(let i=1; i<=9; i++){ <br>" +
"     if(i%2!==0)myArray.push(i);<br>" +
"   } ";