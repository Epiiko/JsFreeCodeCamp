function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

document.querySelector("#badcode").innerHTML =
  " if (val){ <br> if(val) {" + "return 'Yes'; <br> { <br> {";
document.querySelector("#goodcode").innerHTML =
" if (val>=25 && val<=50) {" + "return 'Yes';";
