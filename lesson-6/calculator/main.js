var numbers = document.getElementsByClassName('number')
var operators = document.getElementsByClassName('operator')
var result = document.getElementById('result')
var input = document.getElementById("input")

// Add listeners for all number buttons
for (var i = 0; i < numbers.length; i++) {
    // on each HTML Element add this listner (callback)
    numbers[i].addEventListener('click', (event) => {
        // get the number from content of the Element
        var number = event.target.innerHTML
        // merge input content with new number
        input.innerHTML = input.innerHTML + number
    })
}

// Add listeners for all operator buttons
for (var i = 0; i < operators.length; i++) {
    // same as above    
    operators[i].addEventListener('click', (event) => {
        var operator = event.target.innerHTML
        input.innerHTML = input.innerHTML + operator
    })
}

// Add listeners for the one equeal button
result.addEventListener('click', () => {
    var content = input.innerHTML
    var numbers = []
    var operators = []
    var lastNumber = ''

    // Go char by char
    for (var i = 0; i < content.length; i++) {
        // if char in this iteration is operator, save it to operators
        if (content[i] == '+' || content[i] == '-' || content[i] == '×') {
            operators.push(content[i])
            // each operator finishes collection of numbers, so we can save the last collected numbers
            numbers.push(lastNumber)
            // and reset the last collection
            lastNumber=''
            
        } else {
            // otherwise collect the number
            lastNumber = lastNumber + content[i]
        }
    }

    // Save the last collected numbers
    numbers.push(lastNumber)

    
    // Go operator by operator
    // First operation are multiplications (×), division is not implemented
    for (var i = 0; i< operators.length; i++ ) {
        var operator = operators[i]
        // if operator is multiplication
        if (operator == '×') {
            // get the number on current position and multiply it by the following number
            numbers[i] = numbers[i] * numbers[i + 1]
            // we dont need the following number anymore
            delete numbers[i + 1]
        } 
    }

    // Second operators are addition (+) and subtraction (-)
    // We start with first number every time
    var sum = Number(numbers[0])
    for (var i = 0; i< operators.length; i++ ) {
        var operator = operators[i]

        // in case of + add next number to sum
        if (operator == '+') {
            sum = sum + Number(numbers[i + 1])
        }

        // in case of - subtract next number from sum
        if (operator == '-') {
            sum = sum - Number(numbers[i + 1])
        }

    }

    // set the sum to html
    input.innerHTML = sum

})