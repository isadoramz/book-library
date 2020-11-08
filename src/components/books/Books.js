import React, { Component } from 'react';
import BookList from '../bookList/BookList';
import SearchBox from '../searchBox/SearchBox';
import { booksService } from '../../services';

class Books extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      books: []
    }
  }

  searchBooksByKeyword = (keyWord) => {
    booksService.getBooksByKeyWord(keyWord).then((returnedBooks) => {
      this.setState({ ...this.state, ...{ books: returnedBooks } });
   });
  }

  render() {
    return (
      <div>
        <SearchBox searchHandler={this.searchBooksByKeyword} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;