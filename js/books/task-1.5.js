//  Знайти всі книги з рейтингом 4.8 і вище.

import { books } from "./array-books.js"

const booksWithRatingLowerForPointEight = (books) => {

    const result = books.filter(book => book.rating < 4.8);
    return result
}

console.log(booksWithRatingLowerForPointEight(books));

