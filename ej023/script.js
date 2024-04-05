let a, b, c;
a *= 5;
b *= 3;
c *= 10;

document.querySelector("#badcode").innerHTML =
  "let a = 5; <br>let b = 12; <br>let c = 4.6; <br> a = a * 5; <br> b = 3 * b ;<br> c = c * 10; <br>";
document.querySelector("#goodcode").innerHTML =
  "let a = 5;<br>let b = 12;<br>let c = 4.6;<br> a *= 5;<br> b *= 3 ;<br>c *= 10;";
