const inputName = document.querySelector("#name-input")
// console.dir(inputName)
const outputName = document.querySelector("#name-output")
// console.dir(outputName)

inputName.addEventListener('input', handlerInput);

let userName = '';


function handlerInput(event) {
    // console.dir(event.currentTarget.value);
   userName = event.currentTarget.value;
    // console.log('username:', userName)
    
        if (event.currentTarget.value.trim() === '') {
            outputName.textContent = 'Anonymous';
        } else {
         outputName.textContent = userName;
        }
    
};










