const input = document.querySelector('#validation-input')
// console.log(input)

input.addEventListener('blur', handlerInput);

function handlerInput(event) {
    console.log(event.currentTarget.value.length)

    if (event.currentTarget.value.length === 6) {
        input.classList.remove('invalid')
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid') 
    }
}