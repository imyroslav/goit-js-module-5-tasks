

// Знайти першу книгу, видану до 1900 року

import {books} from "../arrays/array-books.js";


const bookBeforeNiteemHundred = (elems) => {

    const result = elems.find(elem => elem.year < 1900);

    return result;
}

console.log(bookBeforeNiteemHundred(books));
