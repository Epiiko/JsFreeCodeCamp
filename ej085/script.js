// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line
  document.querySelector("#badcode").innerHTML =
  " const testObj = {<br> " +
  "  'an entree': 'hamburger', <br>" +
  "  'my side': 'veggies', <br>" +
  "   'the drink': 'water' " +
  "  } <br>" +
  " const entreeValue = testObj<br> ";
  " const drinkValue = testObj;<br> ";
document.querySelector("#goodcode").innerHTML =
" const testObj = {<br> " +
"  'an entree': 'hamburger', <br>" +
"  'my side': 'veggies', <br>" +
"   'the drink': 'water' " +
"  } <br>" +
" const entreeValue = testObj['an entree]<br> "+
" const drinkValue = testObj['the drink']<br> ";