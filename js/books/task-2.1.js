

// найти першу книгу жанру 'Fantasy'.

import { books } from "./array-books.js";

function genreFantesyFirstBook (items) {

    const result = items.find(item => item.genre === "Fantasy");
    return result;
}

console.log(genreFantesyFirstBook(books))