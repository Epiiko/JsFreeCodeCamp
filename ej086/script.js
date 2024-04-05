// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line
  document.querySelector("#badcode").innerHTML =
  " const testObj = {<br> " +
  "  12: 'Namath', <br>" +
  "  16: 'Montana', <br>" +
  "  19: 'Unitas' " +
  "  } <br>" +
  " const playerNumber = 42;<br> " +
  " const player = testObj<br> ";
document.querySelector("#goodcode").innerHTML =
" const testObj = {<br> " +
"  12: 'Namath', <br>" +
"  16: 'Montana', <br>" +
"  19: 'Unitas' " +
"  } <br>" +
" const playerNumber = 16;<br> " +
" const player = testObj[playerNumber]<br> ";