function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

document.querySelector("#badcode").innerHTML = "Sin contenido";
document.querySelector("#goodcode").innerHTML =
  "function reusableFunction(){ <br>" +
  " console.log('Hi World');<br> " +
  "} <br>" +
  "reusableFunction();";
