var usernameElement = document.getElementById("username")
usernameElement.addEventListener("change", (event) => {
    var element = event.target
    var value = element.value
    var errorElement = document.getElementById("username_error")
    
    if (value.length < 2) {
        errorElement.innerHTML="Invalid"
    } else {
        errorElement.innerHTML=""
    }
})

var form = document.getElementById("loginform")
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var login = document.getElementById("username").value
    if (value.length < 2) {
        errorElement.innerHTML="Invalid"
    } else {
        errorElement.innerHTML=""
    }
})

var ageElement = document.getElementById("age")
ageElement.addEventListener("change", (event) => {
    var element = event.target
    var value = element.value
    var parentInput = document.getElementById("parent_input")

    if (value < 18) {
        parentInput.style.display = 'block'
    } else {
        parentInput.style.display = 'none'
    }
})