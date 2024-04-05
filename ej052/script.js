// Declare the myGlobal variable below this line
const myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal =5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

  document.querySelector("#badcode").innerHTML = "Mucho contenido";
document.querySelector("#goodcode").innerHTML =
  " Line 2: const myGlobal = 10; <br>" +
  " Line 6: oopsGlobal = 5";