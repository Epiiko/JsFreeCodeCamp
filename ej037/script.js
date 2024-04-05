// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line

document.querySelector("#badcode").innerHTML = " const lastName = 'Lovelace'; <br>" + 
"const secondToLastLetterOfLastName = lastName" ;
document.querySelector("#goodcode").innerHTML = " const lastName = 'Lovelace'; <br>" + 
"const secondToLastLetterOfLastName = lastName[lastName.length-2];" ;