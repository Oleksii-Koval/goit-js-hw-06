const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery")
// console.log(list)

list.style.listStyle = "none";
list.style.display = "flex"
list.style.flexWrap = "wrap"
list.style.gap = "10px"

const markup = images
  .map(({url, alt}) => {
    return `<li>
    <img class="gallery-img" src="${url}" alt="${alt}" width = "300px"/>
  </li>`
  })
  .join("");
// console.log(markup)
  
list.insertAdjacentHTML("afterBegin", markup)

