
function writeLog(message) {
    console.log(message)
    // Kiểu dữ liệu 
    console.log(typeof message)
}

writeLog(123)

// console.log(message)
// Nhiều tham số
function writeLog2(message, message2){
    console.log('writeLog 2 : '+message)

    console.log('writeLog 2 : '+message2)
}
writeLog2()

// Đối tượng arguments
function writeLog3() {
    console.log(arguments)
}
writeLog3(1,2,3,'dsfew')

// Giới thiệu vòng for of
function writeLog4() {
    var myString = ''
    for (var param of arguments) {
        // console.log(param)
        myString += `${param} - `
    }
    console.log(myString)
} 
writeLog4('Log 1', 'Log 2', 'Log 3')

function reverseString(data) {
    return data.split("").reverse().join('')
}

console.log(reverseString('32243'))

function palindromeCheck(data) {
    var reversedData = data.split('').reverse().join('')
    return (data === reversedData)
}

console.log(palindromeCheck('maaam'))