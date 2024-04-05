// Setup
const myArray = [];
for (let i=9; i>=1; i--){
  if(i%2!==0) myArray.push(i);
}
// Only change code below this line
document.querySelector("#badcode").innerHTML =
"const myArray = [2, 3, 4, 5, 6]; Rellena el array con los numeros impares del 1-9 inclusivos";
document.querySelector("#goodcode").innerHTML =
" const myArray = [];<br> " +
"  for(let i=1; i<=9; i++){ <br>" +
"     if(i%2!==0)myArray.push(i);<br>" +
"   } ";