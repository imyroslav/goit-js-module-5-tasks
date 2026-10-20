//  Знайти всі книги з ціною меншою ніж 10 доларів.

import { books } from "./array-books.js"

const booksCheaperThanTen = (books) => {
    const result = books.filter(book => book.price < 10);
    return result;
}


console.log(booksCheaperThanTen(books));