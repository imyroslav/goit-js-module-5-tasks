

// Знайти всі книги, що містять слово 'and' у назві

import { books } from "./array-books.js";

const booksWithAndInTheTitle = (items) => {

    const result = items.filter(
        item => item.title.includes("and")
    )
    return result;
}

console.log(booksWithAndInTheTitle(books));