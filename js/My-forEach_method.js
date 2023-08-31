Array.prototype.forEach2 = function(callback){
    for(var value in this){
        if(this.hasOwnProperty(value))
        callback(this[value],value,this)
    }
}


var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

courses.length = 1000

courses.forEach2(function(course, index, array) {
    console.log(course,' ',index)
})

// courses.forEach(function(course, index, array){
//     console.log(course, index, array)
// })