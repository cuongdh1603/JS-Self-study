//  Vòng lặp For/of

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java'
]

for (var key of languages) {
    console.log(key)
}
var myInfo = {
    name : 'HCU',
    age: 22,
    address: 'Ha Noi, VN'
}
console.log(Object.keys(myInfo))

for(var key of Object.keys(myInfo)){
    console.log(myInfo[key])
}
// Cach 2
console.log('Cach 2 : '+ Object.values(myInfo))

console.log('Break và Continue trong vòng lặp')

for(var i=0;i<10;i++) {
    if(i%2 != 0)
        continue
    console.log(i)
}

console.log('Vòng lặp lồng nhau (Nested loop)')
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
]
for (var i = 0; i < myArray.length; i++){
    for( var j = 0; j < myArray[i].length; j++)
        console.log(myArray[i][j])
}