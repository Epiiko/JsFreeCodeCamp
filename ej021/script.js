let a = 12;
let b = 9;
let c = 7;

document.querySelector("#badcode").innerHTML =
  "let a = 3; <br>let b = 17; <br>let c = 12; <br> a = a + 12; <br> b = b + 9 ;<br> c = c + 7; <br>";
document.querySelector("#goodcode").innerHTML =
  "let a = 3;<br>let b = 17;<br>let c = 12;<br> a += 12;<br> b += 9;<br>c += 7;";
