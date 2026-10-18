import { books } from "./array-books.js"

// Знайти всі книги жанру 'Fantasy'

const fantasyBook = (items) => {

    const bookFantasy = items.filter(item => 
    item.genre === "Fantasy"
);

return bookFantasy

}



console.log(fantasyBook(books));



