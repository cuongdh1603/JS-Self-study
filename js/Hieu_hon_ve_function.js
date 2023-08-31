/*
1. Khi function đặt trùng tên?
2. Khai báo biến trong hàm
3. Định nghiax hàm trong hàm
*/

function showMessage() {
    function showMessage2() {
        console.log('Message 21')
    }

    showMessage2()
}

var showMessage3 = function() {
    
}

showMessage()