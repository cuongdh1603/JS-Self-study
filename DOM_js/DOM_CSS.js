

var boxElement = document.querySelector('.box')

console.log(boxElement.style)



Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
})

console.log(boxElement.style.backgroundColor)