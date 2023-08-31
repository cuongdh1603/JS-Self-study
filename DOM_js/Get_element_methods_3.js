
/*
1. getElementById
2. getElementsByClassName
3. getElementsByTagName
4. querySelector
5. querySelectorAll
6. HTMLCollection
7. document.write
*/



var headings = document.getElementsByTagName('h1')

console.log(headings)

for(var i=0;i<headings.length;i++){
    console.log(headings[i])
}

console.log(document.forms)
console.log(document.forms['form-1'])
console.log(document.forms[0])

// document.write('HELLO')