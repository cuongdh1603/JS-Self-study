
var headingElement = document.querySelector('a')

// headingElement.title = 'Heading'
// headingElement.className = 'Heading'

// headingElement.href = 'Heading'

// headingElement.setAttribute('class','heading')

//Set an attribute
headingElement.setAttribute('data-1','heading')

//Get an attribute
var headingElement2 = document.querySelector('h2')
alert(headingElement2.getAttribute('class'))
