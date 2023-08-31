
// var courses = [
//     'Javascript',
//     'PHP'
// ]
var courses = new Array(11)
courses.push('PHP')

// courses.length = 10
console.log(courses)

for (var index in courses) {
    // console.log(index)
    console.log(courses[index])
}

for(var i=0;i<courses.length;i++){
    console.log(courses[i])
}