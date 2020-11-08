import React, { Component } from 'react';
import BookList from '../bookList/BookList';
import { booksService } from '../../services';

const keyWord = "dogs";

class Books extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    booksService.getBooksByKeyWord(keyWord).then((returnedBooks) => {
      this.setState({ ...this.state, ...{ books: returnedBooks } });
    });
  }

  render() {
    return (
      <BookList books={this.state.books} />
    );
  }
}

export default Books;