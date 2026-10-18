import { books } from "./array-books.js"


// Знайти всі книги, автором яких є 'Fyodor Dostoevsky'

const getFyodorBooks = books => {
  const listFyodor = books.find(book => book.author === "Fyodor Dostoevsky"
)
return listFyodor
}

console.log(getFyodorBooks(books));