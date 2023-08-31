// DOM events
// 1. Attribute events
// 2. Assign event using the element node

var h1Element = document.querySelector('.h1')

h1Element.onclick = function(e) {
    console.log(e.target)
}