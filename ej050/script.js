function functionWithArgs(n1, n2){
    console.log(n1+n2);
}
functionWithArgs(2,3);
document.querySelector("#badcode").innerHTML = "Sin contenido";
document.querySelector("#goodcode").innerHTML =
  "function functionWithArgs(n1, n2){ <br>" +
  "  console.log(n1+n2);<br> " +
  "} <br>" +
  "functionWithArgs(2,3);";
