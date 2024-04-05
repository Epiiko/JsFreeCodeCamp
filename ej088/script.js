const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark="woof";
  

  
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
"  myDog.bark='woof';";