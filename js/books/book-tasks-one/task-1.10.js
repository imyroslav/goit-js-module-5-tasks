

// Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.


import { books } from "../arrays/array-books.js";

const histricBooksWithRatingHigher = (elements) => {

    const result = elements.filter(element => {

        const genre = element.genre === "Historical";
        const rating = element.rating > 4.7;
        return genre && rating;
    }
    )
    return result;
}

console.log(histricBooksWithRatingHigher(books));
