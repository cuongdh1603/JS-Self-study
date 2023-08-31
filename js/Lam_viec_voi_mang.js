//Làm việc với mảng - Phần 2
/*
   forEach()
1. push(), pop(), shift(), unshift()
2. every()
3. some()
4. map()
5. find()
6. reduce()
7. splice()
8. slice()
9. filter()
10. includes()
*/

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

courses.forEach(function(course, index) {
    console.log(index, course);
})
console.log('every()');

var isFree = courses.every(function(course, index){
    return course.coin === 0
})
console.log(isFree)

console.log('some()');
var existTree = courses.some(function(course, index){
    return course.coin === 0
})
console.log(existTree)

console.log('find()');
var course = courses.filter(function(course, index){
    return course.name === 'Java'
})
console.log(course)

// Array map() method trong javascript
function courseHandler(course,index,origin) {
    return {
        id:course.id,
        name: `Khoa hoc : ${course.name}`,
        coin: course.coin,
        coinText: `Gia : ${course.coin}`,
        index: index+1,
        origin: origin
    };
}
var newCourses = courses.map(courseHandler)
console.log(newCourses)

//  Array reduce() method
console.log('reduce()')
var i = 0
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandler, 0)
console.log(totalCoin)

var depthArray = [1,2, [3,4],5,6,[7,8,9]]
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem)
}, [])
console.log(flatArray)