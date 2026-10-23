//  Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів

import { books } from "./array-books.js"

const romanceCheaperThanEight = (books) => {

    const result = books.filter(book => {
    const romance = book.genre === "Romance";
    const eight = book.price < 8;
    return romance && eight;
    });

    return result;
}
 

console.log(romanceCheaperThanEight(books))