const logger = (log) => {
    console.log(log)
}

logger('Message...')

// const sum = (a,b) => {
//     return a+b
// }
const sum = (a,b) => a+b
const objectSum = (a,b) => ({a:a,b:b}) 
console.log(sum(2,2))
console.log(objectSum(2,3))

const course = {
    name : 'Javascript',
    getName : () => {
        return this 
    }
}
console.log(course.getName())