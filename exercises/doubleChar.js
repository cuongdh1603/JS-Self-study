String.prototype.duplicate = function(callback) {
    var output = ''
    for(var key in this){
        if(this.hasOwnProperty(key)){
            output += callback(this[key],key)
        }
    }
    return output
}

var name = 'Adrian'

var result = name.duplicate(function(ele, index){
    return ele+ele
})
console.log(result)
// -----------------------------------------------------
console.log('Write a JavaScript function to clone an array.')

var array_Clone = function(arr) {
    return arr.slice(0)
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))

// ------------------------------------------------------
console.log('Write a JavaScript function to get the first element of an array. Passing the parameter n will return the first n elements of the array.')
var first = function(arr, quantity) {
    var result = []
    if(quantity===undefined)
        quantity = 1

    if(quantity <= 0) quantity = 0
    if(arr.length <= quantity) return arr
    else return arr.slice(0,quantity)
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
// ---------------------------------------------------------
console.log('Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.')
var arr = [1, [2], [3, [[4]]],[5,6]]
var result = arr.reduce(function(accumulator, ele, id, array){
    // accumulator.push(ele)
    return accumulator.concat(ele)
},[])
console.log(result)

// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
console.log('Write a JavaScript program to display the colors')

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n){
    var o = ["th","st","nd","rd"],
    x = n%100;
    console.log('1',o[(x-20)%10])
    console.log('2',o[x])
    console.log('3',o[0])
    return x+(o[(x-20)%10]||o[x]||o[0]);
 }

 for(n = 0; n < color.length; n++){
    var ordinal = n + 1;
   
    var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");
   
   console.log(output);
   }