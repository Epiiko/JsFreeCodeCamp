const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

document.querySelector("#badcode").innerHTML =
  " Usando tanto la notacion de corchetes como la de punto settea la variable secondTree con el valor <br>"+
  "del segundo elemento de la lsta del segundo objeto del array de myPlants"
document.querySelector("#goodcode").innerHTML =
  " const gloveBoxContents = myStorage.car.inside['glove box'];";
