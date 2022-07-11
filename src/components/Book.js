import React from 'react';

export default function Book({ book, books, changeShelf }) {
  const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : 'noCover';

  const title = book.title ? book.title : 'No title available';

  const updateShelf = event => {
    changeShelf(book, event.target.value);
  };

  let currentShelf = 'none';

  for (let item of books) {
    if (item.id === book.id) {
      currentShelf = item.shelf;
      break;
    }
  }

  return (
    <li>
      <div className="book">
        <div
          className="book-top"
          style={{ backgroundImage: `url("${coverImg}")` }}
        >
          <div
            className="book-cover"
            style={{ backgroundImage: `url("${coverImg}")` }}
          />
          <div className="book-shelf-changer">
            <select onChange={updateShelf} defaultValue={currentShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
}
