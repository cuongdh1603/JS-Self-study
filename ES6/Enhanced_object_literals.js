/*
1. Định nghĩa key : value cho object
2. Định nghĩa method cho object
3. Định nghĩa key cho object dưới dạng biến
 */

var name = 'Javascript'
var price = 1000
// Vi du 1 va 2 
// var course = {
//     name: name,
//     price: price
// }
var course = {
    name,
    price,
    getName() {
        return name
    }
}
console.log(course.getName())
console.log(course)
// Vi du 3
var fieldName = 'new-name'
var fieldPrice = 'price'

const course1 = {
    name : 'PHP',
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}
console.log(course1)

// Default parameter values

function logger(log = 'Gia tri mac dinh') {
    
    console.log(log)

}

logger(5)

function logger1(log, type = 'log') {
    console[type](log)
}

logger1('Message...','error')
logger1('Message...','warn')
logger1('Message...','log')
logger1('Message...')

// Destructuring trong javascript ES6

var array = ['Javascript','PHP','Ruby']
var [a,b,c] = array

var [c,,d] = array

var[e,f, ...rest] = array
console.log(a, b, c)

console.log(c,d)

console.log(rest)

var onlineCourse = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children : {
        name: 'ReactJS'
    }
}

var {name, price, price2} = onlineCourse

console.log(name, price, price2)

var {name, ...rest} = onlineCourse

console.log(name)
console.log(rest)

var {name : parentName, children: {name : childrenName}} = onlineCourse
console.log(parentName)
console.log(childrenName)
console.log(name)


var offlineCourse = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    // description: 'description value'
}

var {name, description = 'default description'} = offlineCourse
console.log(name)
console.log(description)


// Rest parameters (...rest)

function logger2(...params){
    // console.log(arguments)
    console.log(params)
}

console.log(logger2(1,2,3,4,5,6,7,8))

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
   
  // old way
  function myVehicle({type,model,brand,color}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log(message)
  }

var array1 = ['C', 'Ruby', 'PHP']
var array2 = ['ReactJS', 'Dart']
var array3 = [...array2, ...array1]

console.log(array3)

var object1 = {
    name: 'Javascript'
}
var object2 = {
    price: 1000
}
var object3 = {
    ...object1,
    ...object2
}
console.log(object3)

// Tag template literals

function highlight([first, ...strings],...values){
    return values.reduce(
        (acc, curr) => [...acc,`<span>${curr}</span>`,strings.shift()],[first]
    ).join('')
}

var brand = 'F8'
var course = 'Javascript!'
const html = highlight`Hoc lap trinh ${course} tai ${brand}!`
console.log(html)

// Modules: Import / Export

import typeLog from './logger.js'
console.log(typeof typeLog)
console.log(typeLog)

typeLog('Test message ...', 'error')
typeLog('Test message ...', 'warn')

// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js'

import * as constants from './constants.js'
console.log(constants)

typeLog('Test message ...', constants.TYPE_WARN)
