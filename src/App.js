import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookPage from './components/BookPage';
import SearchBooks from './components/SearchBooks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookPage />} />
      <Route path="search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
