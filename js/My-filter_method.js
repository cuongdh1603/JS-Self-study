
Array.prototype.filter2 = function(callback){
    var output = []
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            if(callback(this[key],key,this))
                output.push(this[key])
            
        }
    }
    return output
}

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 370
    },
    {
        id: 3,
        name: 'Java',
        coin: 190
    },
    {
        id: 4,
        name: 'Spring Boot',
        coin: 510
    },
    {
        id: 5,
        name: 'Java',
        coin: 0
    }
]

var result = courses.filter2(function(course, index, array){
    return course.coin > 200
})
console.log(result)
