

// Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів

import {books} from '../arrays/array-books.js';


const bookGenreRomance = (elements) => {

    const book = elements.find(element => element.genre === "Romance");

    return book;
}


console.log(bookGenreRomance(books));

