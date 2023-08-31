/*
1. Event Listener
2. JSON
3. Promise
    - Sync
    - Async
4. Fetch
5. DOM location
6. Local storage
7. Session storage
8. Coding convention
9. Best Practices
10. Mistakes
11. Performance


*/

// sleep
// setTimeout, setInterval, fetch, 
// XMLHttpRequest, file reading
// request animation frame 
// setTimeout(function() {
//     console.log(1)
// }, 1000)

// console.log(2)

// Callback hell
// Pyramid of doom 

// 1. Pending
// 2. Fulfilled
// 3. Rejected


function sleep(ms){
    return new Promise(
        function(resolve) {
            setTimeout(resolve, ms)
        }
    )
}
sleep(1000)
    .then(function() {
        console.log(1)
        return sleep(1000)
    })
    .then(function() {
        console.log(2)
        return new Promise(
            function(resolve, reject){
                reject('Co loi')
            }
        )
    })
    .then(function() {
        console.log(3)
        return sleep(1000)
    })
    .then(function() {
        console.log(4)
        return sleep(1000)
    })
    .catch(function(err){
        console.log(err)
    })