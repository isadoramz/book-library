import React, { Component } from 'react';
import BookList from '../bookList/BookList';
import SearchBox from '../searchBox/SearchBox';
import { booksService } from '../../services';

class Books extends Component {

  keyWord = '';
  pageIndex = 0;

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  searchBooksByKeyword = () => {
    booksService.getBooksByKeyWord(this.keyWord, this.pageIndex).then((returnedBooks) => {
      this.setState({ ...this.state, ...{ books: returnedBooks } });
   });
  }

  setKeyWord = (keyWord) => {
    this.keyWord = keyWord;
    this.searchBooksByKeyword();
  }

  setPageIndex = (pageIndex) => {
    if(pageIndex >= 0) {
      this.pageIndex = pageIndex;
      this.searchBooksByKeyword();
    }
  }

  render() {
    return (
      <div>
        <SearchBox keyWordHandler={this.setKeyWord} />
        <div>
          <p onClick={() => this.setPageIndex(this.pageIndex - 1)}>previous</p>
          <p>{this.pageIndex + 1}</p>
          <p onClick={() => this.setPageIndex(this.pageIndex + 1)}>next</p>
        </div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;