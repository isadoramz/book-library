import React from 'react';

function BookCard(props) {
  return(
    <>
      <h5>{props.book.title}</h5>
      <p>{props.book.author}</p>
      <button>➕</button>
    </>
  )
}

export default BookCard;