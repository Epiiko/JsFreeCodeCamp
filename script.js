const cuerpo = document.querySelector(".contenido");
for (let i = 1; i <= 114; i++) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td3 = document.createElement("td");
  if (i < 10) {
    td1.textContent = "Ejercicio 00" + i;
    td3.innerHTML =
    '<a href="ej00' + i + '/index.html"><input type="button" value="Link"></a>'
  } else if (i < 100) {
    td1.textContent = "Ejercicio 0" + i;
    td3.innerHTML =
    '<a href="ej0' + i + '/index.html"><input type="button" value="Link"></a>'
  } else {
    td3.innerHTML =
      '<a href="ej' + i + '/index.html"><input type="button" value="Link"></a>'
    td1.textContent = "Ejercicio " + i;
  }
  //segundo campo por decidir

  tr.appendChild(td1);
  tr.appendChild(td3);
  cuerpo.appendChild(tr);
}

// let cuerpo = document.querySelector(".contenido");
// for (let i = 1; i <= 112; i++) {
//   let tr = document.createElement("tr");
//   let td1 = document.createElement("td");
//   let td3 = document.createElement("td");
//   let ceros = 3 - (i + '').length;
//   td3.innerHTML =
//       '<a href="ej' + '0'.repeat(ceros) + i + '/index.html"><input type="button" value="Link"></a>'
//     td1.textContent = "Ejercicio " + '0'.repeat(ceros) + i;
//   //segundo campo por decidir
//   tr.appendChild(td1);
//   tr.appendChild(td3);
//   cuerpo.appendChild(tr);
// }



//MADE BY TATO MODO PRO
// const cuerpo = document.querySelector(".contenido");
// for (let i = 1; i <= 112; i++) {
//   const [tr, td1, td3] = [document.createElement("tr"), document.createElement("td"), document.createElement("td")];
//   let n = i.toString().padStart(3, '0');
//   td3.innerHTML =
//       `<a href="ej${n}/index.html"><input type="button" value="Link"></a>`
//     td1.textContent = `Ejercicio ${n}`;
//   //segundo campo por decidir

//   tr.appendChild(td1);
//   tr.appendChild(td3);
//   cuerpo.appendChild(tr);
// }