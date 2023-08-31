
// ClassList property

// add
// contains
// remove
// toggle


var boxElement = document.querySelector('.box')

// console.log(boxElement.classList.value)

boxElement.classList.add('red','blue')

console.log(boxElement.classList.value)

console.log(boxElement.classList.contains('red'))

// boxElement.classList.remove('red')

console.log(boxElement.classList.contains('red'))

setTimeout(() => {
    boxElement.classList.toggle('red')
}, 3000)