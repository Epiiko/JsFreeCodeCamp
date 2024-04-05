const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
  document.querySelector("#badcode").innerHTML =
" Accede al valor de la propiedad glove box de un objeto y guardalo en gloveBoxContents";
document.querySelector("#goodcode").innerHTML =
" const gloveBoxContents = myStorage.car.inside['glove box'];";