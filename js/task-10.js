const input = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('#boxes');
boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.gap = '10px'


createBtn.addEventListener('click', handlerCreate);

function handlerCreate() {
  let amount = input.value;
  createBoxes(amount)
}

destroyBtn.addEventListener('click', handlerRemove);

function handlerRemove() {
  destroyBoxes()
}


function createBoxes(amount) {
removeBoxes()
const arr = []
  for (let i = 1; i <= amount; i += 1){
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`
    box.style.height = `${30 + i * 10}px`
    box.style.backgroundColor = getRandomHexColor();
    arr.push(box)
  }
  boxes.append(...arr)
};


function destroyBoxes() {
  removeBoxes()
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function removeBoxes() {
  boxes.innerHTML = ''
}