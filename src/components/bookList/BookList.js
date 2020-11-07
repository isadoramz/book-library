import React from 'react';

const BookList = (props) => (
  <div className="container">
    <div className="row">
      {
        props.books.map((book, i) => (
          <div className="col-md-6 col-lg-4">
            <p>{book.title}</p>
          </div>
        ))
      }
    </div>
  </div>
);

export default BookList;