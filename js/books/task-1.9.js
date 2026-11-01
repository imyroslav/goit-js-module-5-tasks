

// Знайти всі книги, автором яких є 'J.R.R. Tolkien'.

import { books } from "./array-books.js";

function authorTolkien (elements) {

    const result = elements.filter(
        element => element.author === 'J.R.R. Tolkien'
    )
    return result;
}

console.log(authorTolkien(books));