function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

document.querySelector("#badcode").innerHTML =
  "function welcomeToBooleans() { <br>" + "  return false; <br>" + " }";
document.querySelector("#goodcode").innerHTML =
  "function welcomeToBooleans() { <br>" + "  return true; <br>" + " }";
