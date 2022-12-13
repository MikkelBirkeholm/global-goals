const nameInput = document.querySelector('#name')
const phoneInput = document.querySelector('#phone')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')
const button = document.querySelector('#button')

button.addEventListener('click', function () {
    if (nameInput.value == '') {
        nameInput.style.backgroundColor = 'red'
    }
    else {
        nameInput.style.backgroundColor = 'green'
    }
    // ===========================
    if (phoneInput.value.length < 8) {
        phoneInput.style.backgroundColor = 'red'
    }
    else {
        phoneInput.style.backgroundColor = 'green'
    }
    // ===========================
    if (emailInput.value == '') {
        emailInput.style.backgroundColor = 'red'
    }
    else {
        emailInput.style.backgroundColor = 'green'
    }
    // ===========================
    if (messageInput.value == '') {
        messageInput.style.backgroundColor = 'red'
    }
    else {
        messageInput.style.backgroundColor = 'green'
    }

    if (nameInput.value != "" && phoneInput.value.length >= 8 && emailInput.value != "" && messageInput.value != "") {
        button.style.backgroundColor = "green" 
        location.href = 'action.html'
    }


})


