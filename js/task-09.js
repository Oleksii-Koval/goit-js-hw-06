// const container = document.querySelector('.widget');
// console.log(container);
const button = document.querySelector('.change-color');
// console.log(button);
const colorValue = document.querySelector('.color');
// console.log(colorValue);
const body = document.querySelector('body');
// console.log(body)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', handlerClick);

function handlerClick() {
  let randomColor = getRandomHexColor();

  body.style.backgroundColor = `${randomColor}`;
 
  colorValue.textContent = randomColor;
}





