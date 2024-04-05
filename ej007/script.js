var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b= b + 5;
c = c + "String";

document.querySelector("#badcode").innerHTML =
  "var a; <br> var b; <br> var c; <br> a = a + 1; <br> b = b + 5; <br> c = c + ' String!';";
document.querySelector("#goodcode").innerHTML =
  "var a=5; <br> var b=10; <br> var c='I am a '; <br> a = a + 1; <br> b = b + 5; <br> c = c + ' String!';";
