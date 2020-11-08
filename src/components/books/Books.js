import React, { Component } from 'react';
import BookList from '../bookList/BookList';
import SearchBox from '../searchBox/SearchBox';
import { booksService } from '../../services';
import './Books.css'

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
      <div  className="container">
        <SearchBox keyWordHandler={this.setKeyWord} />
        <BookList books={this.state.books} />
          <div className="books-card-pagination">
            <button className="button-pagination" onClick={() => this.setPageIndex(this.pageIndex - 1)}>←</button>
            <button className="button-pagination"> {this.pageIndex + 1}</button>
            <button className="button-pagination" onClick={() => this.setPageIndex(this.pageIndex + 1)}>→</button>
          </div>
        </div>
    );
  }
}

export default Books;