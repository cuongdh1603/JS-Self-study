
var inputValue

var inputElement = document.querySelector('input[id="text1"]')

console.log(inputElement)

inputElement.oninput = function(e){
    inputValue = e.target.value 
    console.log(inputValue)
}

var checkboxElement = document.querySelector('input[type="checkbox"]')
checkboxElement.onchange = function(e) {
    console.log(e.target.checked)
}

var selectElement = document.querySelector('select')
selectElement.onchange = function(e) {
    console.log(e.target.value)
}

var inputElement2 = document.querySelector('#text2')
inputElement2.onkeyup = function(e) {
    console.log(e.which)
    switch(e.which){
        case 27:
            console.log('Exit')
            break
    }
        

}

document.onkeypress = function(e){
    switch(e.which){
        case 27:
            console.log('EXIT')
            break
        case 13:
            console.log('SEND CHAT')
            break
    }
}