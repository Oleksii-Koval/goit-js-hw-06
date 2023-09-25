function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('input');
// console.log(input)
const createBtn = document.querySelector('button[data-create]');
// console.log(createBtn)
const destroyBtn = document.querySelector('button[data-destroy]');
// console.log(destroyBtn)
const boxes = document.querySelector('#boxes');
// console.log(boxes);

input.addEventListener('input', handlerValue);

boxes.style.display = 'flex'
boxes.style.flexWrap = 'wrap'
boxes.style.gap = '5px'

function handlerValue(event) {
  // console.log(event.currentTarget.value)
  let amount = Number(event.currentTarget.value);
  console.log(amount);
 
  for (let i = 1; i <= amount; i += 1) {
  
    createBtn.addEventListener('click', handlerCreate)
    
  function handlerCreate() {
      
    const boxEl = document.createElement('div')
    boxEl.style.width = `${30 + i*10}px`;
    boxEl.style.height = `${30 + i*10}px`;
    boxEl.style.backgroundColor = `${getRandomHexColor()}`;
    
    boxes.insertAdjacentElement('beforeEnd', boxEl);


    destroyBtn.addEventListener('click', handlerDestroy);

    function handlerDestroy() {
     boxEl.remove()
   }
  }
 }
}
