// Only change code below this line

const someAdjective = "cool";
let myStr = "Learning to code is ";
myStr += someAdjective;

document.querySelector("#badcode").innerHTML = "const someAdjective = ''; <br> " + "let myStr ='Learning to code is ';";
document.querySelector("#goodcode").innerHTML = " const someAdjective = 'cool'; <br> " + 
"let myStr ='Learning to code is ';<br>" +
"myStr += someAdjetive";