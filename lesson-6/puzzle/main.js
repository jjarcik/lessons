var fields = document.getElementsByClassName('field')
var step = 0;

for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener('click', (event) => {

        if (event.target.innerHTML === '') {
            if (step % 2 === 0) {
                event.target.innerHTML = '◯';
                event.target.style.color = 'red';
            } else {
                event.target.innerHTML = '×';
                event.target.style.color = 'blue';
            }
            step++
        }

        // winner test
        var lastFindChar = ''
        var count = 0
        for (var i = 0; i < fields.length; i++) {
            if (i % 10 === 0){
                count = 0
            }
            
            if (fields[i].innerHTML !== '') {
                if (fields[i].innerHTML === lastFindChar) {
                    count = count + 1
                } else {
                    count = 0
                }

               

                lastFindChar = fields[i].innerHTML
                if (count === 4) {
                    alert ("Winner id " + lastFindChar)
                }
                
            } 
        }
    })
}