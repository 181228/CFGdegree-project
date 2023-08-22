import React, { useState, useEffect } from "react";
import "./landingpage.css";
// import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';

function LandingPage() {

const [randomBooks, setRandomBooks] = useState([]);

useEffect(() => {
  // Fetch random book listings from API
  fetch('http://localhost:3000/api/books')
    .then(response => response.json())
    .then(data => {
      setRandomBooks(data);
    })
    .catch(error => {
      console.error('Error fetching random books:', error);
    });
}, [])

const booksToDisplay = randomBooks.slice(0, 3);

return (
  <div>
    <Header />

    <div className="pageContent">
      <h1>ReadSwap</h1>
      <h2>Why buy when you can Swap!</h2>
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="buttonContainer">
        <button className="searchBut" id="bestsellersButton">BESTSELLERS</button>
        <button className="searchBut" id="genresButton">GENRES</button>
      </div>
      <br></br>

      <div className='layout-books-landing'>
          <div className="container-books-landing">
            <div id="bookList-landing">
              {booksToDisplay.map(book => (
                <div key={book.id} className="book-landing">
                  <img src={`http://localhost:3000/CoverImages/${book.image}`} alt={book.title} width="150" height="200" />
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p> 
                  <p>Genre: {book.genre}</p>
                  
                  {/* Additional book details */}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>

    <Footer />
  </div>
);
}

export default LandingPage;