import React from 'react';
function BookDescriptionCard(props) {
  return (
    <div>
      <p>Author: {props.book.author}</p>
      <p>Published date: {props.book.publishedDate}</p>
      <p>Description:</p>
      <p>{props.book.description}</p> 
    </div>
  );
}

export default BookDescriptionCard;
