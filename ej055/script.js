// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed=processArg(7);
// Only change code below this line


document.querySelector("#badcode").innerHTML =
  "Llama a la funcion con un arg de 7 y asignaselo a la variable processed";

document.querySelector("#goodcode").innerHTML =
  "processed=processArg(7);";