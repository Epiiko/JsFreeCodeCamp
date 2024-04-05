studlYCapvar =10;
properCamelCase =" A String";
titleCaseOver = 9000;

document.querySelector("#badcode").innerHTML =
  "var studlyCapVar; <br> var properCamelCase; <br> var TitleCaseOver; var StUdLyCapVaR = 10; <br> var properCamelCase = 'A String'; <br> var TitleCaseOver = 9000;"
document.querySelector("#goodcode").innerHTML =
"var studlyCapVar; <br> var properCamelCase; <br> var titleCaseOver; var studlYCapVaR = 10; <br> var properCamelCase = 'A String'; <br> var titleCaseOver= 9000;"