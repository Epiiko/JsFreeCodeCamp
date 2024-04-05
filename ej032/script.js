let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

document.querySelector("#badcode").innerHTML = " let lastNameLength = 0; <br> " + 
"const lastName = 'Lovelace'; ";

document.querySelector("#goodcode").innerHTML = " let lastNameLength = 0; <br> " + 
"const lastName = 'Lovelace'; <br> " +
"lastNameLength = lastName.length;";