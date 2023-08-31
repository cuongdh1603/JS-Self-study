
var headingElement = document.querySelector('h1')

console.log(headingElement.innerText)
headingElement.innerText = 'New hwading'
console.log(headingElement.textContent)

// getter

// setter

var headingElement2 = document.querySelector('.heading2')
console.log(headingElement2.innerText)
console.log(headingElement2.textContent)

var headingElement3 = document.querySelector('h3')
headingElement3.innerText = `


<i>Hello</i>

`