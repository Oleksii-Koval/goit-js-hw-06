const container = document.querySelector("#counter");
// console.log(container)
const buttonDecrement = container.querySelector('[data-action="decrement"]');
// console.log(buttonDecrement)
const buttonIncrement = container.querySelector('[data-action="increment"]');
// console.log(buttonIncrement)
const counter = document.querySelector('#value');
// console.log(counter)



let counterValue = 0;


buttonDecrement.addEventListener('click', valueDecrement);

function valueDecrement() {
    counterValue -= 1
   counter.textContent = counterValue;
}

buttonIncrement.addEventListener('click', valueIncrement);

function valueIncrement() {
    counterValue += 1
    counter.textContent = counterValue;
}


