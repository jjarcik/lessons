var numberList = document.getElementsByClassName('number') // HTML Element
var input = document.getElementById('input')
var clear = document.getElementById('clear')
var result = document.getElementById('result')
var operators = document.getElementsByClassName('operator')

for (var i = 0; i< numberList.length; i++) {
    numberList[i].addEventListener('click', (event) => {
        input.innerHTML = input.innerHTML + event.target.innerHTML
    })
}

for (var i = 0; i< operators.length; i++) {
    operators[i].addEventListener('click', (event) => {
        input.innerHTML = input.innerHTML + event.target.innerHTML
    })
}

clear.addEventListener('click', () => {
    input.innerHTML = ''
})

result.addEventListener('click', () => {
    // sum 
    var data = input.innerHTML
    var _numbers = []
    var _operators = []
    var lastNumber = ''

    for (var i = 0; i < data.length; i++) {
        if (data[i] != '+' && data[i] != '-') {
            lastNumber = lastNumber + data[i]
        } else {
            _operators.push(data[i])
            _numbers.push(lastNumber)
            lastNumber=''
            
        }
    }

    _numbers.push(lastNumber)

    console.log(_numbers)
    console.log(_operators)

    var sum = Number(_numbers[0])
    for (var i = 0; i < _operators.length; i++) {
        if (_operators[i] == '+') {
            sum = sum + Number(_numbers[i + 1])
        }

        if (_operators[i] == '-') {
            sum = sum - Number(_numbers[i + 1])
        }
    }

    input.innerHTML = sum
})















