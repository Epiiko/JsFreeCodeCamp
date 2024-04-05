// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

document.querySelector("#badcode").innerHTML = " const lastName = 'Lovelace'; <br>" + 
"const lastLetterOfLastName = lastName;" ;
document.querySelector("#goodcode").innerHTML = " const lastName = 'Lovelace'; <br>" + 
"const lastLetterOfLastName = lastName[lastName.length-1];" ;