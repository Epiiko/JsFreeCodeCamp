// Setup
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line
myDog.name = "Happy Coder";

document.querySelector("#badcode").innerHTML =
  " const myDog = {<br> " +
  "  name: 'Coder', <br>" +
  "  legs: 4, <br>" +
  "  tails: 1, " +
  "  friends: ['freeCodeCamp Campers']";
document.querySelector("#goodcode").innerHTML =
" const myDog = {<br> " +
"  name: 'Coder', <br>" +
"  legs: 4, <br>" +
"  tails: 1, " +
"  friends: ['freeCodeCamp Campers']"+
"  myDog.name = 'Happy Coder';"