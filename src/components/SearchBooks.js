import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from './Book';

export default function SearchBooks({ books, changeShelf }) {
  const [newBooks, setNewBooks] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const getBooks = event => {
    const category = event.target.value;

    if (category) {
      search(category.trim(), 20).then(books => {
        console.log(books);
        if (books.length > 0) {
          setNewBooks(books);
          setNotFound(false);
        } else {
          setNewBooks([]);
          setNotFound(true);
        }
      });
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={getBooks}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {newBooks.map(book => (
            <Book
              book={book}
              books={books}
              key={book.id}
              changeShelf={changeShelf}
            />
          ))}
          {notFound && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </ol>
      </div>
    </div>
  );
}
