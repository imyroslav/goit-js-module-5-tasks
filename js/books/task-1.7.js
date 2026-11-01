

// Знайти всі книги, видані до 1900 року

import { books } from "./array-books.js";

const editionBeforeNineteenHundred = (books) => {

    const result = books.filter(
        book => book.year < 1900
    )
    return result;
}

console.log(editionBeforeNineteenHundred(books))