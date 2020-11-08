import request from 'superagent';

const booksService = {
  async getBooksByKeyWord(keyWord, pageIndex = 0) {
    const response = await request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: keyWord, startIndex: pageIndex * 4, maxResults: 4 });

    const books = response.body.items;

    return books.map((book) => {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        image: book.volumeInfo.imageLinks.thumbnail,
        author: book.volumeInfo.authors,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description
      };
    })
  },

  setFavoriteBooks(books) {
    window.localStorage.setItem("favoriteBooks", JSON.stringify(books));
  },
  
  getFavoriteBooks() {
    const value = JSON.parse(window.localStorage.getItem("favoriteBooks")) 
    return value || [];
  },

  addFavoriteBook(book) {
    let favoriteBooks = this.getFavoriteBooks();

    if(!favoriteBooks) {
      favoriteBooks = [];
    }

    if(favoriteBooks.filter(b => book.id === b.id).length === 0) {
      favoriteBooks.push(book);
      this.setFavoriteBooks(favoriteBooks);
    }
  }

}
export default booksService;