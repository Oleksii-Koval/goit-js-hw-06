const input = document.querySelector('#validation-input');
const attribute = Number(input.getAttribute('data-length'));

input.addEventListener('blur', handlerInput);

function handlerInput(event) {
    if (event.currentTarget.value.length === attribute) {
        changeClass('valid', 'invalid');
    } else {
        changeClass('invalid', 'valid');
    }
}

function changeClass(classToAdd, classToRemove) {
    input.classList.add(classToAdd);
    input.classList.remove(classToRemove);
}
