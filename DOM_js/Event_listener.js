// DOM event / Event listener 
// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe 
var btn = document.getElementById('btn')

// console.log(btn)


setTimeout(function(){
    btn.onclick = function() {
        console.log('Viec 1')
        console.log('Viec 2')
        alert('Viec 3')
    }
},3000)

var btn2 = document.getElementById('btn2')

btn2.onclick = function() {
    console.log('Viec 1')
    console.log('Viec 2')
    alert('Viec 3')
}

setTimeout(function() {
    btn2.onclick = function() {

    }
},3000)

var btn3 = document.getElementById('btn3')

btn3.addEventListener('click', function(e) {
    console.log('Event 1')
})
btn3.addEventListener('click', function(e) {
    console.log('Event 2')
})
btn3.addEventListener('click', function(e) {
    console.log('Event 3')
})
btn3.addEventListener('click', function(e) {
    console.log('Event 4')
})

var btn4 = document.getElementById('btn4')

function viec1(){
    console.log('Viec 1')
}
function viec2(){
    console.log('Viec 2')
}
btn4.addEventListener('click',viec1)
btn4.addEventListener('click',viec2)

setTimeout(function() {
    btn4.removeEventListener('click', viec1)
}, 2000)
