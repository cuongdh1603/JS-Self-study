

function Validator(options) {
    function getParent(element, selector) {
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    var selectorRules = {}
    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        


        // var errorElement = getParent(inputElement, '.form-group')
        var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage

        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]
        // Lặp qua từng rule & kiểm tra
        for (var i = 0; i < rules.length; i++){
            switch (inputElement.type) {
                case 'checkbox':
                    errorMessage = rules[i](
                        document.querySelector(rule.selector+':checked')
                    )
                    break
                case 'radio':
                    errorMessage = rules[i](
                        document.querySelector(rule.selector+':checked')
                    )
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            
            if(errorMessage) break
        }
        // console.log(rules)

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement,options.formGroupSelector).classList.add('invalid')
            
        }
        else {
            errorElement.innerText = ''
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage
    }
    // console.log(options.form)
    var formElement = document.querySelector(options.form)
    if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault()

            var isFormValid = true
            // 
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement,rule)
                if(!isValid){
                    isFormValid = false
                }
                
            })

            var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
            // console.log(enableInputs)
            

            // console.log('In gia tri formValues')
            // console.log(formValues)
             
            if(isFormValid){
                // console.log('Không có lỗi')
                // Trường hợp submit với javascript 
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="'+ input.name + '"]:checked').value
                                break
                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    values[input.name] = ''
                                    return values
                                } 
                                if(!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break
                            case 'file':
                                values[input.name] = input.files
                                break
                            default:
                                values[input.name] = input.value
                        }

                        
                        return values
                    },{})

                    options.onSubmit(formValues)
                }
                // Trường hợp submit với hành vi mặc định 
                else{
                    formElement.submit()
                }
            }
            
        }
        // Lặp qua mỗi rule và xử lý
        options.rules.forEach(function (rule) {
            // Lưu lại các rules 
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }
            else{
                selectorRules[rule.selector] = [rule.test]
            }
            
    
            // Lấy element của form cần validate
            var inputElements = formElement.querySelectorAll(rule.selector)
            // console.log('inputElement',inputElements)
            Array.from(inputElements).forEach(function (inputElement) {
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                inputElement.onblur = function () {
    
                    validate(inputElement,rule)
                }
                inputElement.oninput = function() {
                    if(getParent(inputElement,options.formGroupSelector).classList.contains('invalid')){
                        getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
                        errorElement.innerText = ''
                    }
                    console.log(getParent(inputElement,options.formGroupSelector))
                }
            })
            
            
        })
    }
    
    // console.log(selectorRules)
}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)? undefined : 'Vui lòng nhập đúng định dạng email'
        }
    }
} 

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Yêu cầu nhập tối thiếu ${min} kí tự`
        }
    }
} 

Validator.isConfirmed = function (selector, getConfirmValue, message){
    return {
        selector : selector,
        test : function(value) {
            return value === getConfirmValue() ? undefined : message || 'Dữ liệu nhập vào không đúng'
        }
    }
}

// -----------------------------------------------------
// Ôn lại hàm reduce()

const data = [5,10,15,20,25]
const res = data.reduce(function(acm, value){
    return acm + value
}, 0)
console.log(res)

//------------------------------------------------------
// Ôn lại về toán tử 
/*
    0 
    ''
    null
    undefined 
    NaN
    false
*/
var a = 1
var b = 2

var result = 'A' && 'B' && 'C' && 'D'
// console.log(`Result 1 : ${result}`)
if (result){
    console.log('DIEU KIEN DUNG')
}
else{
    console.log('DIEU KIEN SAI')
}

result = NaN || 'B' || 'C' || 'D'

console.log(`Result 1 : ${result}`)

//---------------------------------------------
// Stringtify : Từ Javascript types -> JSON
// Parse : Từ JSON -> Javascript types
// JSON : Number, String, Boolean, Null, Arrar, Object
console.log('JSON là gì? JSON được sử dụng như thế nào trong Javascript?')

var json1 = 'null'
var json2 = '["dog","cat"]'
var json3 = '{"name":"Do Cuong","age":23}'
console.log( JSON.parse(json2))
console.log(JSON.parse(json3))
console.log(JSON.stringify(true))
console.log(typeof JSON.stringify(null))
console.log(JSON.stringify(['Javasc"ript','PHP']))
console.log(typeof JSON.stringify(['Javascript','PHP']))
console.log( JSON.stringify(
    {
        name: 'Cuong Do',
        age: 23
    }
))
