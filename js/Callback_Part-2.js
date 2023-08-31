// Callback - Phần 2

Array.prototype.map2 = function(callback) {
    var output = []
    for(var i = 0;i<this.length;i++){
        // console.log(this[i])
        
        output.push(callback(this[i],i))
        // console.log(result)
        // rs += result
    }
    return output
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

var op = courses.map2(function(course){
    return `<h2>${course}</h2>`
})
console.log(op.join(''))