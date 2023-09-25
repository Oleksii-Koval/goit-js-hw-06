const input = document.querySelector('#font-size-control');
// console.log(input)
const text = document.querySelector('#text');
// console.dir(text)


input.addEventListener('input', handlerControl);


function handlerControl(event) {
    // console.log(event.currentTarget.value)
    text.style.fontSize = `${event.currentTarget.value}px`;
}