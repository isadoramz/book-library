import React, { Component } from 'react';
import bookService from '../../services/booksService';
import BookDescriptionCard from '../bookDescriptionCard/BookDescriptionCard'

class BookCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      renderDescription: false,
      buttonIcon: "➕"
    }
  }

  showBookDescriptionCard() {
    if(this.state.renderDescription) {
      return <BookDescriptionCard book={this.props.book}/>
    }
  }

  toggleRenderDescription() {
    this.setState({ ...this.state, ...{ renderDescription: !this.state.renderDescription } });
  }
  
  render() {
    return(
      <>
        <h5>{this.props.book.title}</h5>
        <p>{this.props.book.author}</p>
        <button onClick={() => {this.toggleRenderDescription()}}>{this.state.buttonIcon}</button>
        <button onClick={() => bookService.addFavoriteBook(this.props.book)}>⭐️</button>
        {this.showBookDescriptionCard()}
      </>
    )
  }
}

export default BookCard;