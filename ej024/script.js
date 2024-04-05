let a, b, c;
a /= 12;
b /= 4;
c /= 11;

document.querySelector("#badcode").innerHTML =
  "let a = 48; <br>let b = 108; <br>let c = 33; <br> a = a / 12; <br> b = b / 4 ;<br> c = c / 11; <br>";
document.querySelector("#goodcode").innerHTML =
  "let a = 48;<br>let b = 108;<br>let c = 33;<br> a /= 12;<br> b /= 4 ;<br>c /= 11;";
