const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const list = document.querySelector("#ingredients")
// // console.log(list)

// ingredients.forEach((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item")

//   list.append(listItem)
// })


const list = document.querySelector('#ingredients');

const arr = [];

ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item')

  arr.push(item)
})

list.append(...arr)