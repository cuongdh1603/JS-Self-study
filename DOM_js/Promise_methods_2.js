function httpGetAsync(theUrl, resolve){
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange= function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
            resolve(xmlHttp)
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}

const currentPromise = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300',resolve)
})
const promise2 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300',resolve)
})
const promise3 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300',resolve)
})
const executeAsync = async()=>{
    try {
        const response = await currentPromise
        document.getElementById('img_1').src = response.responseURL
        const response2 = await promise2
        document.getElementById('img_2').src = response2.responseURL
        const response3 = await promise3
        document.getElementById('img_3').src = response3.responseURL
    }
    catch(err){
        console.log({err})
    }
}
executeAsync()

// currentPromise.then((data) => {
//     console.log(data)
//     document.getElementById('img_1').src = data.responseURL
//     return promise2
// })
// .then((data) => {
//     document.getElementById('img_2').src = data.responseURL
//     return promise3
// })
// .then(data => {
//     document.getElementById('img_3').src = data.responseURL
// })
// .catch((err)=>{
//     console.log(err)
// })

// function Course(name, price){
//     this.name = name
//     this.price = price
//     this.getName = () => this.name
// }

class Course{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    getName() {
        return this.name 
    }

    getPrice() {
        return this.price
    }
}

const phpCourse = new Course('PHP', 1000)
const jsCourse = new Course('Javascript', 1200)

console.log(phpCourse.getName())
console.log(jsCourse)

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Yes, I love you"), 1000
    })
})

promise
    .then(
        (value) => {
            console.log(value)
        }
    )
    .finally(
        () => {
            console.log("OK")
        }
    )














// function test(){
//     setTimeout(() => {console.log('1')},0)
//     console.log('2')
//     console.log('3')
// }


// httpGetAsync('https://picsum.photos/200/300', (data) => {
//     console.log(data)
//     document.getElementById('img_1').src = data.responseURL
//     httpGetAsync('https://picsum.photos/200/300', (data) => {
//         document.getElementById('img_2').setAttribute('src',data.responseURL)
//         httpGetAsync('https://picsum.photos/200/300', (data) => {
//             document.getElementById('img_3').setAttribute('src',data.responseURL)
//         })
//     })
// })

// test()

var name = 'Alice'
var cat = {
    name: 'Ginah'
}
const adventurer = {
    name,
    cat,
    goods : [1,2,3,4,5,6],
    hiking : () => console.log("I'm hiking")
}

const dogName = adventurer.cat?.name;
console.log(dogName)
adventurer.hiking()

var sq = adventurer.goods?.[7]
adventurer.hiking?.()
console.log(sq)

var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Tran Kien'
    },
    //....
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Hello'
    },
    {
        id: 2,
        user_id: 2,
        content : 'Bye :(('
    }
]

function getComments() {
    return new Promise((resolve, promise) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000)
    })
}
function getUsersByIds(userIds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var result = users.filter((user) => {
                return userIds.includes(user.id)
            })
            setTimeout(resolve(result),1000)
            // resolve(result)
        },1000)
    })
}

getComments()
    .then(
        () => {
            var userIds = comments.map((ele) => {
                return ele.user_id
            })
            return getUsersByIds(userIds)
                .then((users) => {
                    return {
                        users: users,
                        comments: comments
                    }
            })
        })
    .then(
        (data) => {
            var commentBlock = document.getElementById('comment-block')

            var html = ''
            data.comments.forEach((comment) => {
                var user = data.users.find((user) => {
                    return user.id === comment.user_id
                })
                html += `<li>${user.name} : ${comment.content}</li>`
            })

            commentBlock.innerHTML = html
        }
    )
    

// getUsersByIds([1])
//     .then((users) => {
//         console.log(users)
//     })