
console.log(document.getElementById('text').style)
var btnElement = document.querySelector('#jsstyle')

btnElement.onclick = function (e) {
    Object.assign(document.getElementById('text').style,
        {
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '23px',
            color: 'green'
        }

    )

}

var formElement = document.querySelector('#form1')
formElement.addEventListener('submit', function (e) {
    // var fName = document.querySelector('input[name="fname"]').value
    // var lName = document.querySelector('input[name="lname"]').value
    // console.log(fName,' ',lName)
    for (var i = 0; i < e.target.length; i++) {
        if (e.target[i].value != 'Submit')
            console.log(e.target[i].value)
    }
})


const listItems = document.querySelectorAll('#list li')

const handleHover = function(e){
    var preText = e.target.innerText
    return e.target.innerText = (preText === 'ON' ? 'OFF':'ON');
};

for(var i=0;i<listItems.length;i++){
    listItems[i].addEventListener('mouseover',handleHover)
}
// if (listItems.length > 1) {
//     listItems.forEach(item => item.addEventListener('mouseover', handleHover));
// }
var linkElement = document.querySelector('#w3r')
function getAttributes(){
    console.log(linkElement['hreflang'])
    console.log(linkElement['href'])
    console.log(linkElement['rel'])
    console.log(linkElement['target'])
    console.log(linkElement['type'])
}

var btnElement4 = document.getElementById('bai4')

btnElement4.addEventListener('click', getAttributes)

var tableElement = document.querySelector('#sampleTable')
function insert_Row(){
    
    var row = tableElement.insertRow()
    var cell1 = row.insertCell()
    var cell2 = row.insertCell()
    cell1.innerText = 'Row 2 cell 1'
    cell2.innerText = 'Row 2 cell 1'
    console.log('So hang ',tableElement.getElementsByTagName('tr').length)
    console.log('So cot ',tableElement.getElementsByTagName('td').length/tableElement.getElementsByTagName('tr').length)

}

var btnElement5 = document.getElementById('bai5')

btnElement5.addEventListener('click', insert_Row)