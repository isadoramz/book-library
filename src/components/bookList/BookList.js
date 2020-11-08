import React from 'react';
import BookCard from '../bookCard/BookCard'

const BookList = (props) => (
  <ul>
    {
      props.books.map((book, i) => (
        <li key={i}>
          <BookCard book={book}/>
        </li>
      ))
    }
  </ul>
);

export default BookList;