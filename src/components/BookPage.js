import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

export default function BookPage({books, changeShelf}) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookList books={books} changeShelf={changeShelf}/>
      <div className="open-search">
        <Link to="search">Add a book</Link>
      </div>
    </div>
  );
}
