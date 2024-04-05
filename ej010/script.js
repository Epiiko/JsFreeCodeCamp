const fCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(fCC, fact);

document.querySelector("#badcode").innerHTML =
  "var FCC = 'freeCodeCamp'; <br> var fact = 'is cool!'; <br> fact = 'is awesome!'; <br> console.log(fCC, fact);"
document.querySelector("#goodcode").innerHTML =
"const FCC = 'freeCodeCamp'; <br> let fact = 'is cool!'; <br> fact = 'is awesome!'; <br> console.log(FCC, fact);"