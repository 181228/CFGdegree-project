import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './bookslisting.css';

function BookListing() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setBooks(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bl-container">
      <br></br>
      <br></br>
        {/* <h2>Book Listing</h2> */}
        <div className='bl-book-layout'>
          <div className="bl-book-container">
            <div id="bookList">
              {books.map(book => (
                <div className="book" key={book.id}>
                  <div>
                    <Link to={`/book/${book.id}`}>
                      <img src={`http://localhost:3000/CoverImages/${book.image}.jpg`} alt="Book Cover" width="150" height="200" />
                      <p> <b>{book.title}</b> | {book.author} | {book.genre}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default BookListing;
