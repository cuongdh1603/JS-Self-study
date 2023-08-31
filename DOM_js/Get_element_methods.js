// HTML DOM

// 1. Element: ID, class, tag, CSS selector, HTML collection 
// 2. Attribute
// 3. Text

var headingNode = document.getElementById('heading');

console.log({
    element : headingNode
})

var headingNodes = document.getElementsByClassName('heading')

console.log(headingNodes)

var headingTag = document.getElementsByTagName('p')

console.log(headingTag)

var headingSelector = document.querySelector('html .box .heading-2:nth-child(3) ')

console.log(headingSelector)

var headingSelectors = document.querySelectorAll('.box .heading-2')

console.log(headingSelectors[4])
// HTML Collection
console.log(document.forms['form-2'])
console.log(document.forms[1])
console.log(document.forms.formTest)

console.log(document.anchors)

