let a, b, c;
a -= 6;
b -= 15;
c -= 1;

document.querySelector("#badcode").innerHTML =
  "let a = 11; <br>let b = 9; <br>let c = 3; <br> a = a - 6; <br> b = b - 15 ;<br> c = c + 1; <br>";
document.querySelector("#goodcode").innerHTML =
  "let a = 3;<br>let b = 17;<br>let c = 12;<br> a -= 6;<br> b -= 15;<br>c -= 1;";
