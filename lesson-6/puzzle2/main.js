// all clickable html divs - game fields
var fields = document.getElementsByClassName('field')
var stepsHtml = document.getElementById('steps')
var scoreHtml = document.getElementById('steps')
var resetHtml = document.getElementById('reset')

// every click to field (player's move) increment this variable
var step = 0;
var scoreRed = 0
var scoreBlue = 0

for (var i = 0; i < fields.length; i++) {
    // Add listeners for all game fields (if user click on a field, call this callback)
    // In the callback function we write players symbol to the field and then we do a test of a game winner
    fields[i].addEventListener('click', (event) => {
        
        // # Write symbol to the field
        // -----------------------------------------------------------------------------
        // Check what is in the field, if the field is empty write ◯ or × to the field
        if (event.target.innerHTML === '') {
            // % is mathematic symbol for a rest of division
            // for example 2 % 2 = 0, 3 % 2 = 1, 4 % 2 = 0
            // we can use this for rotate players ◯ or ×
            if (step % 2 === 0) {
                event.target.innerHTML = '◯';
                event.target.style.color = 'red';
            } else {
                event.target.innerHTML = '×';
                event.target.style.color = 'blue';
            }
            step++
        }

        // # Winer test
        // -----------------------------------------------------------------------------
        // this var we use for save the last founded char in the field
        var lastFindChar = ''
        // count represent number of consecutive characters
        var count = 0
        
        // we do only a horizontal test, want to find 4 same symbols in a row
        for (var i = 0; i < fields.length; i++) {
            // every 10th character represents a new line. So after 10 fields we reset the number of found identical characters
            if (i % 10 === 0){
                count = 0
                lastFindChar = ''
            }
            
            // test each field and if it is not empty...
            if (fields[i].innerHTML !== '') {
                // if it is same char as the char we found before
                if (fields[i].innerHTML === lastFindChar) {
                    count = count + 1
                } else {
                    count = 0
                }

                lastFindChar = fields[i].innerHTML
                if (count === 3) {
                    if (lastFindChar === '◯') {
                        scoreRed++
                    } else {
                        scoreBlue++
                    }
                    alert ("Winner id " + lastFindChar)
                    for (var i = 0; i < fields.length; i++) {
                        fields[i].innerHTML = ''
                    }
                }
                
            } else {
                count = 0
            }
        }

        stepsHtml.innerHTML = "Kolo: " + step
        scoreHtml.innerHTML = "◯: " + scoreRed + ", ×:" + scoreBlue

    })
}

resetHtml.addEventListener("click", () => {
    for (var i = 0; i < fields.length; i++) {
        fields[i].innerHTML = ''
    }
    scoreRed=0
    scoreBlue=0
    step=0
    stepsHtml.innerHTML = "Kolo: " + step
    scoreHtml.innerHTML = "◯: " + scoreRed + ", ×:" + scoreBlue

})