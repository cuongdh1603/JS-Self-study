// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all
/*
In realty

var promise = new Promise(
    function(resolve, reject){
        reject('Error!')
    }
)

promise
    .then(function(result){
        console.log('result: ',result)
    })
    .catch(function(err){
        console.log('Err: ',err)
    })
*/
// Create an always successful promise
/*
var promise = Promise.resolve('Success!')

promise
    .then(function(result){
        console.log('result: ',result)
    })
*/
// Create an always rejected promise
/*
var promise = Promise.reject('Error!')

promise
    .catch(function(result){
        console.log('Error: ',result)
    })
*/

var promise1 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1])
        },2000)
    }
)
var promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3])
        },5000)
    }
)
Promise.all([promise1,promise2])
    .then(function(result){
        // console.log(result)
        var result1 = result[0]
        var result2 = result[1]
        console.log(result1.concat(result2))
        // return result1.concat(result2)
    })

