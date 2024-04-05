const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

document.querySelector("#badcode").innerText = 'const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";'
document.querySelector("#goodcode").innerText = 'const myStr <a href="http://www.example.com" target="_blank">Link</a>'
