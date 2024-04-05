const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (par - strokes >= 2) {
    return "Eagle";
  } else if (par - strokes == 1) {
    return "Birdie";
  } else if (par == strokes) {
    return "Par";
  } else if (par - strokes == -1) {
    return "Bogey";
  } else if (par - strokes == -2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
document.querySelector("#badcode").innerHTML =
"Sin contenido"
document.querySelector("#goodcode").innerHTML =
  "if(strokes==1) {<br> " +
  "       return 'Hole-in-one!''; <br>" +
  " }else if(par-strokes>=2){ <br>" +
  "return 'Eagle'; <br>" +
  " }else if(par-strokes==1){ <br>" +
  "return 'Birdie'; <br>" +
  " }else if(par==strokes){ <br>" +
  "return 'Par'; <br>" +
  " }else if(par-strokes==-1){ <br>" +
  "return 'Bogey'; <br>" +
  " }else if(par-strokes==-2){ <br>" +
  "return 'Doble Bogey'; <br>" +
  "}else{ <br>" +
  " return 'Go home'<br> {";
  document.querySelector('#goodcode').setAttribute('Style' , 'font-size : 11px')
