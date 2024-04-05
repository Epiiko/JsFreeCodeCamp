// Setup MAAAAAAAAL
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let found = false;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name && !found) {
      found = true;
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  if (!found) return "No such contact";
  // Only change code above this line
}
console.log(lookUpProfile("Kristian", "lastName"));

document.querySelector("#badcode").innerHTML = "Realiza una función para filtrar mostrar propiedades si existe el contacto y tiene esa propiedad<br> si no mostraremos el error pertinente";
document.querySelector("#goodcode").innerHTML =
  "  function lookUpProfile(name, prop) { <br> " +
  "  let found = false; <br>" +
  "  for (let i = 0; i < contacts.length; i++) { <br>" +
  "  if (contacts[i].firstName == name && !found) { <br>" +
  " found = true; <br>" +
  " if (prop in contacts[i]) { <br>" +
  " return contacts[i][prop]; <br>" +
  " } else { <br>" +
  "  return 'No such property'; <br>" +
  "} } } }<br> if (!found) return 'No such contact';";
  document.querySelector('#goodcode').setAttribute('Style' , 'font-size : 12px')


