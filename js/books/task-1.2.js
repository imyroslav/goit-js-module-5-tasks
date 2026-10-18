
import { books } from "./array-books.js"


// Знайти всі книги, видані після 2000 року.


const olderMillenium = (items) => {

    const result = items.filter(item => item.year > 1900)
    return result;

}

console.log(olderMillenium(books))