const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

document.querySelector("#badcode").innerHTML =
  "[          <br>" +
  " [1, 2, 3], <br> " +
  "[4, 5, 6], <br>" +
  "[7, 8, 9], <br>" +
  "[[10, 11, 12], 13, 14] <br>" +
  "               ]";
document.querySelector("#goodcode").innerHTML =
  "[ <br>" +
  " [1, 2, 3], <br> " +
  "[4, 5, 6], <br>" +
  "[7, 8, 9], <br>;" +
  "[[10, 11, 12], 13, 14] <br>" +
  "] <br> " +
  " const myData = myArray[2][1];";
