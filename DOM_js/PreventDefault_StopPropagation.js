// DOM events

// 1. preventDefault
// 2. stopPropagation

// var aElements = document.querySelectorAll('a')

// Phải đặt name
// var aElements = document.anchors
var aElements = document.links

console.log(aElements)

for (var i=0;i<aElements.length;i++){
    aElements[i].onclick = function(e) {
        // console.log(e.target.href)
        if(!e.target.href.startsWith('https://cafedev.vn')){
            e.preventDefault()
        }
    }
}

var ulElement = document.querySelector('ul')
ulElement.onmousedown = function(e) {
    e.preventDefault()
}
document.querySelector('ul').onclick = function(e){
    console.log(e.target)
}

document.querySelector('.StopPropagation').onclick = 
    function() {
        console.log('DIV')
    }

document.querySelector('button').onclick =
    function(e) {
        e.stopPropagation()
        console.log('Click me!')
    }