// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

document.querySelector("#badcode").innerHTML = " let firstLetterOfLastName = ''; <br> " + 
"const lastName = 'Lovelace';" ;

document.querySelector("#goodcode").innerHTML = " let firstLetterOfLastName = ''; <br> " + 
"const lastName = 'Lovelace'; <br> " +
"firstLetterOfLastName = lastName[0];";