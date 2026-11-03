

//Знайти першу книгу, видану після 2000 року.

import { books } from "../arrays/array-books.js";

const bookIssuedAfter = (items) => {

    const result = items.find(item => item.year > 2000);
    return result;
}

console.log(bookIssuedAfter(books));