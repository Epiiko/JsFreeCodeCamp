// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

document.querySelector("#badcode").innerHTML =
  " const testObj = {<br> " +
  "  hat: 'ballcap', <br>" +
  "  shirt: 'jersey', <br>" +
  "  shoes: 'cleats' <br>" +
  "  } <br>" +
  " const hatValue = testObj;<br> ";
  " const shirtValue = testObj;<br> ";
document.querySelector("#goodcode").innerHTML =
" const testObj = {<br> " +
"  hat: 'ballcap', <br>" +
"  shirt: 'jersey', <br>" +
"  shoes: 'cleats' <br>" +
"  } <br>" +
" const hatValue = testObj.hat;<br> "+
" const shirtValue = testObj.shirt;<br> ";
