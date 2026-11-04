

//Знайти першу книгу, що містить слово 'and' у назві.


import {books} from "../arrays/array-books.js";


function findAndInTitle (list) {

    const result = list.find(li => li.title.includes("and"));

    return result;
} 

console.log(findAndInTitle(books));