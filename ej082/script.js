let count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card == 10 || ["J", "Q", "K", "A"].includes(card)) {
    count--;
  }

  // return count + (count < 1 ? " Hold" : " Bet")  ternario
  if (count < 1) {
    return count + " Hold";
  } else {
    return count + " Bet";
  }
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

document.querySelector("#badcode").innerHTML = "Sin contenido";
document.querySelector("#goodcode").innerHTML =
  " if (card >= 2 && card <= 6) {<br> " +
  "count++; <br>" +
  "} else if (card == 10 || ['J', 'Q', 'K', 'A'].includes(card)) {" +
  "  count--; <br>" +
  " } " +
  "if(count <1){ <br>" +
  "return count + 'Hold' <br>" +
  " }else{ <br>" + 
"return count + 'Bet' <br>" + "} <br> {";
document.querySelector('#goodcode').setAttribute('Style' , 'font-size : 15px')
