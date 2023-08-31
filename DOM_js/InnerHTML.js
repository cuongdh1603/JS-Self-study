

var boxElement = document.querySelector('.box')

// console.log(boxElement.innerHTML)
// console.log(document.querySelector('h1').innerText)
boxElement.outerHTML = '<span>Span Tag</span>'
console.log(boxElement.innerHTML)