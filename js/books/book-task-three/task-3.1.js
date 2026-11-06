

// Чи є в масиві хоча б одна книга жанру 'Fantasy'?

import {books} from "../arrays/array-books.js";

function atLeastOneFantasy (items) {

    const result = items.some(item => item.genre === "Fantasy")

    return result;
}

console.log(atLeastOneFantasy(books));