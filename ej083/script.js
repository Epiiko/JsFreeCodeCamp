const myDog = {
    // Only change code below this line
    name: "Rolfo",
    legs: 4,
    tails: 1,
    friends: ["pipo", "pepo", "pupa"]
  
    // Only change code above this line
  };
document.querySelector("#badcode").innerHTML = "const myDog={}";
document.querySelector("#goodcode").innerHTML =
  " const myDog = {<br> " +
  "  name: 'Rolfo', <br>" +
  " legs: 4, <br>" +
  " tails: 1, <br>" +
  "  friends: ['pipo', 'pepo', 'pupa']<br>}; " ;
  

