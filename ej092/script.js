const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
     {
      "artist": "Diana",
      "title": "Julito",
      "release_year": 1993,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
    }
];

document.querySelector("#badcode").innerHTML =
" Añade un objeto al objeto complejo existente <br> (artist, title, release_year, formats[], gold)";
document.querySelector("#goodcode").innerHTML =
" ,{<br> " +
"     'artist': 'Diana', <br>" +
"    'title': 'Julito', <br>" +
"    'release_year': 1993, <br>" +
"    'formats': ['CD', '8T', 'LP'], <br>" +
" } ";
