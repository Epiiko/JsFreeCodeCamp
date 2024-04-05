// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else {
    if (prop !== "tracks") {
      records[id][prop] = value;
    } else {
      if ("tracks" in records[id]) {
        records[id]["tracks"].push(value);
      } else {
        records[id]["tracks"] = [value];
      }
    }
    return records;
  }
}
updateRecords(recordCollection, 5439, "artist", "ABBA");
document.querySelector("#badcode").innerHTML =
"Crea una función que con cuatro parametros (records, id, prop, value) filtre si existe dicho elemento dentro de los objetos existentes devolviendolo al completo <br>"+
"Si valor vacio - devuelve prop <br>" +
"Si prop no es tracks y el value es un string vacio asigna value a prop <br>"+
"Si prop es tracks y el value no esta vacio pero el album no tiene tracks crea un array vacio y añadelo <br>" +
"Si tracks y el value no estan vacios añade ek album al array de tracks" ;
document.querySelector("#goodcode").innerHTML =
" function updateRecords(records, id, prop, value) {<br> " +
"  if (value === '') { <br>" +
"   delete records[id][prop]; <br>" +
" }else{ <br>" +
"  if (prop !== 'tracks') { <br> " +
"   } else { <br>"+
" if ('tracks' in records[id]) {<br> " +
"   records[id]['tracks'].push(value); <br>" +
"   } else { <br>"+
" records[id]['tracks'] = [value];<br> } <br> } " +
"   records[id]['tracks'].push(value); <br>" +
"return records;<br>}}"
document.querySelector('#badcode').setAttribute('Style' , 'font-size : 12px')
document.querySelector('#goodcode').setAttribute('Style' , 'font-size : 12px')