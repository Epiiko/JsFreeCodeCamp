// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails
    
document.querySelector("#badcode").innerHTML =
" const myDog = {<br> " +
"  name: 'Coder', <br>" +
"  legs: 4, <br>" +
"  tails: 1, <br>" +
"  'bark': 'woof', <br>" +
"  friends: ['freeCodeCamp Campers']";
document.querySelector("#goodcode").innerHTML =
" const myDog = {<br> " +
"  name: 'Coder', <br>" +
"  legs: 4, <br>" +
"  tails: 1, <br>" +
"  'bark': 'woof', <br> " +
"  friends: ['freeCodeCamp Campers'] <br>"+
"  delete myDog.tails;";