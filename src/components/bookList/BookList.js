import React from 'react';
import BookCard from '../bookCard/BookCard'

const BookList = (props) => (
  <div>
    <div className="">
    {
      props.books.map((book, i) => (
        <div className="">
           <BookCard book={book}/>
        </div>
      ))
    }
    </div>
  </div>
);

export default BookList;