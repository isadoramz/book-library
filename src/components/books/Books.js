import React from 'react';
import BookList from '../bookList/BookList'

const books = [
  {
    title: "O Pequeno Príncipe"
  },
  {
    title: "O Pequeno Príncipe 2"
  }
];

const Books = () => (
  <BookList books={books} />
);

export default Books;