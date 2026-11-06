

// Знайти першу книгу, автором якої є 'J.R.R. Tolkien'

import {books} from "../arrays/array-books.js"

const tolkienBook = (elems) => {

    const result = elems.find(elem => elem.author === "J.R.R. Tolkien");

    return result
}


console.log(tolkienBook(books));

