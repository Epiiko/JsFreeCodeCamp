const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line
document.querySelector("#badcode").innerHTML = " const myNoun = 'dog'; <br> " + 
"const myAdjective = 'big'; <br> " +
"const myVerb = 'ran'; <br> " +
"const myAdverb = 'quickly'; <br> " + 
"const wordBlanks = '';"

document.querySelector("#goodcode").innerHTML = " const myNoun = 'dog'; <br> " + 
"const myAdjective = 'big'; <br> " +
"const myVerb = 'ran'; <br> " +
"const myAdverb = 'quickly'; <br> " + 
"const wordBlanks = myNoun + ' ' + myAdjective + ' ' + myVerb + ' ' + myAdverb;";
