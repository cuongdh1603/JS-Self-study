//Object trong Javascript
var emailKey = 'email'
var myInfo = {
    name: 'HC',
    age: 18,
    address : 'HN, VN',
    [emailKey] : 'dhcuong@gmail.com'
}
// myInfo.email = 'dhcuong@gmail.com'
// Trong trường hợp truyền tên key dạng chuỗi
// myInfo['my-email'] = 'dhcuong@gmail.com'
console.log(myInfo)
// Kiểm tra object có chứa dữ liệu hay không 
console.log(myInfo['email'])
console.log(myInfo[emailKey])
//Xóa

delete myInfo.address

console.log(myInfo)

var myInfo2 = {
    name: 'HC',
    age: 18,
    address : 'HN, VN',
    [emailKey] : 'dhcuong@gmail.com',
    getName: function() {
        return this.name
    }
}

console.log(myInfo2.getName())
// -----------------------------------------

function Cylindrical(radius, height) {
    this.radius = radius
    this.height = height
    this.volume = function() {
        var v = Math.PI*(radius**2)*height
        console.log(v)
        return Math.floor(v*100)/100
        // return typeof v.toFixed(3)
    }
}  
var cyl1 = new Cylindrical(2.5,3)
console.log(cyl1.constructor == Cylindrical)
console.log(cyl1.volume())

function Student(name, sclass, rollno){
    this.name = name
    this.sclass = sclass
    this.rollno = rollno
    this.getLength = function() {
        var osize = 0
        for(var key in this){
            if(this.hasOwnProperty(key)) osize++
        }
        return osize
    }
}
Student.prototype.newName = 'Học sinh'
Student.prototype.getClassName = function() {
    return this.newName
}
var st1 = new Student('David Rayy','VI','12')
console.log(st1.newName)
console.log(st1.getClassName())
console.log('Size of the current object : '+st1.getLength())
//-------------------------------------------------------

const dog = {
    weight : 23,
    'life span': [3,'ko'],
    bark : function(){
        return 'wow'
    }
}
delete dog.bark
console.log(dog)

const horse = Object.create({
    leg : 10.5,
    speed : 23
})
// delete horse.leg
// console.log(horse)