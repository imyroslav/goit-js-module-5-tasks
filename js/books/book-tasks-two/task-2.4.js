

// найти першу книгу з ціною меншою ніж 10 доларів.

import { books } from "../arrays/array-books.js"


const cheapBook = (items) => {

    const result = items.find(item => item.price < 10);
    return result;
}


console.log(cheapBook(books));

