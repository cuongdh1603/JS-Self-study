//Đối tượng Date


var date = new Date()

console.log(date)
console.log(typeof date)

var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDate() 

console.log(`${day}/${month}/${year}`)