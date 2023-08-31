// Hiểu về Javascript Callback Functions | Callback Trong Javascript | Javascript Callback

function myFunction(param) {
    // console.log(typeof param)
    if(typeof param === 'function')
        param('Hoc di')
    else
        console.log(param)
}
function myCallback(value){
    console.log('Me bao ' , value)
}

myFunction(myCallback)