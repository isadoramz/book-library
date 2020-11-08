import request from 'superagent';

const booksService = {
  async getBooksByKeyWord(keyWord) {
    const response = await request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: keyWord });

    const books = response.body.items;

    return books.map((book) => {
      return {
        title: book.volumeInfo.title,
        image: book.volumeInfo.imageLinks.thumbnail,
        author: book.volumeInfo.authors,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description
      };
    })
  }
}

export default booksService;