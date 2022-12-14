const dropdown = document.querySelector('.dropdown');
const menu = document.querySelector('#menu');
const dropdowna = document.querySelectorAll('.dropdown-a');


menu.addEventListener('click', () => {
    dropdown.classList.toggle('detvejegik')
})
dropdowna.addEventListener('click', () => {
    dropdown.classList.toggle('detvejegik')
})