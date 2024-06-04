
import React from 'react';

const BookCard = ({ book, onAddToBookshelf }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
