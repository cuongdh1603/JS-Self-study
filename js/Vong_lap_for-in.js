// Vòng lặp For/in

var myInfo = {
    name : 'HCU',
    age: 22,
    address: 'Ha Noi, VN'
}

for(var key in myInfo)  {
    console.log(typeof key)
}

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java'
]

for (var key in languages) {
    console.log(languages[key])
}