import React from 'react';
import BookCard from '../bookCard/BookCard'

const BookList = (props) => (
  <div>
    <div className="row">
    {
      props.books.map((book, i) => (
        <div className="col-md-6 col-lg-4">
           <BookCard book={book}/>
        </div>
      ))
    }
    </div>
  </div>
);

export default BookList;