
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
// текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >,
// вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації
// по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const list = document.querySelectorAll("#categories");
const items = document.querySelectorAll(".item");

//1
const categories = document.querySelectorAll('.item').length;

console.log(`Number of categories: ${categories}`);

//2
items.forEach(element => {
    const categoryTitle = element.querySelector("h2").textContent;
    console.log("Category:", categoryTitle);

    const categoryItems = element.querySelectorAll("li").length;
    console.log("Elements:", categoryItems);
});



