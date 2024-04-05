// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

document.querySelector("#badcode").innerHTML =
  " Estructura del objeto con un Switch";
document.querySelector("#goodcode").innerHTML =
  "  var lookup = {<br> " +
  "  alpha: 'Adams', <br>" +
  "  bravo: 'Boston', <br>" +
  " charlie: 'Chicago', <br>" +
  " delta: 'Denver', <br>" +
  " echo: 'Easy', <br>" +
  " foxtrot: 'Frank', <br>" +
  " }; <br>" +
  "    result = lookup[val]";
