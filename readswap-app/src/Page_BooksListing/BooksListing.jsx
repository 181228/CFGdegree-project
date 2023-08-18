// import React, { useState } from 'react';
// import "./bookslisting.css";

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BookListing() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Book Listing</h1>
      <div id="bookList">
        {books.map(book => (
          <div className="book" key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Condition: {book.condition}</p>
            <p>Price: £ {book.price}</p>
            <Link to={`/book/${book.id}`}>
              <img src={`../utils/CoverImages/${book.image}`} alt="Book Cover" width="150" height="200" />
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookListing;
