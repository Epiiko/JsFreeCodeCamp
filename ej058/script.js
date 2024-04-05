function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }

  // Only change code above this line
}

document.querySelector("#badcode").innerHTML =
  "function trueOrFalse(wasThatTrue) { <br>" + "}";
document.querySelector("#goodcode").innerHTML =
  "function trueOrFalse(wasThatTrue) { <br>" +
  " if(wasThatTrue){ <br>" +
  "       return 'Yes, that was true' <br>" +
  "     }else{ <br>" +
  "return 'No, that was false' <br>" +
  " } <br> }";
