const myList = [
  ["Chocolate Bar", 5],
  ["Cafe", 2],
  ["Bocadillo", 10],
  ["Aceite", 1],
  ["Colacao", 3],
];

document.querySelector("#badcode").innerHTML = "const myList=[]";
document.querySelector("#goodcode").innerHTML =
  "const myList=[          <br>" +
  " ['Chocolate Bar', 5], <br> " +
  "['Cafe', 2], <br>" +
  " ['Bocadillo', 10], <br>" +
  "['Aceite', 1], <br>" +
  "['Colacao', 3], <br>" +
  "               ]";
