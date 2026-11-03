

// Знайти першу книгу з рейтингом 4.8 і вище.

import { books } from "../arrays/array-books.js";

const findBookRatingLower = (items) => {

    const result = items.find(tem => items.rating >= 4.8)

    return result;

}

console.log(findBookRatingLower(books));
