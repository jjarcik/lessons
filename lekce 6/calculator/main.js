var numbers = document.getElementsByClassName('number')
var operators = document.getElementsByClassName('operator')
var result = document.getElementById('result')

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (event) => {
        var number = event.target.innerHTML
        var input = document.getElementById("input")
        input.innerHTML = input.innerHTML + number
    })
}

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', (event) => {
        var operator = event.target.innerHTML
        var input = document.getElementById("input")
        input.innerHTML = input.innerHTML + operator
    })
}

result.addEventListener('click', () => {
    var input = document.getElementById("input")
    var content = input.innerHTML
    var numbers = []
    var operators = []
    var lastNumber = ''

    for (var i = 0; i < content.length; i++) {
        if (content[i] == '+' || content[i] == '-' || content[i] == '×') {
            operators.push(content[i])
            numbers.push(lastNumber)
            lastNumber=''
            
        } else {
            lastNumber = lastNumber + content[i]
        }
    }

    if (lastNumber != '') {
        numbers.push(lastNumber)
    }

    

    for (var i = 0; i< operators.length; i++ ) {
        var operator = operators[i]
        if (operator == '×') {
            numbers[i] = numbers[i] * numbers[i + 1]
            delete numbers[i + 1]
        } 
    }

    var sum = Number(numbers[0])

    for (var i = 0; i< operators.length; i++ ) {
        var operator = operators[i]
        if (operator == '+') {
            sum = sum + Number(numbers[i + 1])
        }

        if (operator == '-') {
            sum = sum - Number(numbers[i + 1])
        }

    }

    input.innerHTML = sum
    console.log(operators)

})