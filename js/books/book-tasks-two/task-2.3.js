

// Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.

import { books } from "../arrays/array-books.js";


function findFyodorBook (elems) {

    const result = elems.find(elem => elem.author === "Fyodor Dostoevsky");
    return result;
}


console.log(findFyodorBook(books));