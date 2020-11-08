import React from 'react';
import bookService from '../../services/booksService';

function BookCard(props) {
  return(
    <>
      <h5>{props.book.title}</h5>
      <p>{props.book.author}</p>
      <button>➕</button>
      <button onClick={() => bookService.addFavoriteBook(props.book)}>⭐️</button>
    </>
  )
}

export default BookCard;