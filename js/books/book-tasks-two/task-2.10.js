

// Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7

import {books} from "../arrays/array-books.js";


function historyBookFourSeven (items) {

    const result = items.find(item => {
        const genre = item.genre === "Historical";
        const rating = item.rating > 4.7
        return genre && rating
    });

    return result;
}


console.log(historyBookFourSeven(books));
