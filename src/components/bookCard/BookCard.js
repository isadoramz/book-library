import React, { Component } from 'react';
import bookService from '../../services/booksService';
import BookDescriptionCard from '../bookDescriptionCard/BookDescriptionCard'
import './BookCard.css'

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
      <div className="card-container">
        <img className="book-card-image" src={this.props.book.image} alt=""></img>
        <div>
          <h1 className="text">{this.props.book.title}</h1>
          <button className="book-card-button btn-lg btn-block" onClick={() => {this.toggleRenderDescription()}}>{this.state.buttonIcon}</button>
          <button className="book-card-button btn-lg btn-block" onClick={() => bookService.addFavoriteBook(this.props.book)}>⭐️</button>
          {this.showBookDescriptionCard()}
        </div>
      </div>
    )
  }
}

export default BookCard;