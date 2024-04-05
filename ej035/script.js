// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line



document.querySelector("#badcode").innerHTML = " const lastName = 'Lovelace'; <br>" + 
"const thirdLetterOfLastName = lastName;" ;
document.querySelector("#goodcode").innerHTML = " const lastName = 'Lovelace'; <br>" + 
"const thirdLetterOfLastName = lastName[2];" ;