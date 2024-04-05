let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

document.querySelector("#badcode").innerHTML = " const myStr = 'This is the first sentence. '; " ;

document.querySelector("#goodcode").innerHTML = " let myStr = 'This is the first sentence. '; " +
" myStr += 'This is the second sentence.';";