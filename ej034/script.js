// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";

document.querySelector("#badcode").innerHTML = " let myStr = 'Jello World'; <br> " + 
"myStr[0] = 'H';" ;

document.querySelector("#goodcode").innerHTML = " let myStr = 'Jello World'; <br> " + 
"myStr = 'Hello World';";