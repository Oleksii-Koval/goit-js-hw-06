const list = document.querySelector("#categories");

const listItems = list.children;
console.log('Number of categories:', listItems.length);

const itemsArr = [...listItems]
    .forEach(item => {
        const title = item.querySelector('h2').textContent;
        console.log('Category:', title);

        const elements = item.querySelectorAll('li').length;
        console.log('Elements:', elements);
})



