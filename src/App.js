import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookPage from './components/BookPage';
import SearchBooks from './components/SearchBooks';
import { useEffect, useState } from 'react';
import { getAll, update } from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then(books => {
      setBooks(books);
    });
  }, []);

  const changeShelf = (book, shelf) => {
    update(book, shelf).then(response => {
      getAll().then(books => {
        setBooks(books);
      });
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<BookPage books={books} changeShelf={changeShelf} />}
      />
      <Route
        path="search"
        element={<SearchBooks books={books} changeShelf={changeShelf} />}
      />
    </Routes>
  );
}

export default App;
