import React, { useState, useEffect } from "react";
import "./landingpage.css";
// import { Link } from "react-router-dom";

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

    <div className="pageContent">
      <div className="landing-container">
              <h2>Welcome to ReadSwap: Where Books Find New Adventures!</h2>
              <br></br>
              <p className="pi-land"><strong> 📚 Unlock the World of Reading</strong></p>
              <p className="p-land">In a world where digital screens dominate, there's something magical about the <b>feel of a real book in your hands</b>. At ReadSwap, we celebrate the timeless joy of flipping through the pages of beloved paper books.</p>
              <p className="pi-land"><strong> ♻️ Embrace Sustainable Reading</strong></p>
              <p className="p-land">We understand that every book has a story beyond its pages. Yet, too many lie dormant on shelves, gathering dust. Our platform empowers you to give these books new life. Whether you're looking to exchange, sell, or gift a book, ReadSwap is your <b>gateway to responsible reading practices</b> that reduce waste and make a positive impact on our environment.</p>
              <p className="pi-land"><strong> 📖 Discover Treasures Anew</strong></p>
              <p className="p-land">Ever searched high and low for that elusive out-of-print gem? Look no further. ReadSwap connects you with fellow book enthusiasts, creating a bustling marketplace for rare and sought-after titles. Rediscover the thrill of <b>unearthing literary treasures</b> that might otherwise remain hidden.</p>
              <p className="pi-land"><strong> 🔗 Build Connections through Words</strong></p>
              <p className="p-land">More than just a platform, ReadSwap is a <b>vibrant community where book lovers unite</b>. Connect with kindred spirits who share your passion for the written word. Discuss favorite authors, recommend hidden gems, and embark on reading journeys together.</p>
              <p className="pi-land"><strong> 📜 Our recent treasures :</strong></p>
      </div>
      <div className='layout-books-landing'>
          <div className="container-books-landing">
            <div id="bookList-landing">
              {booksToDisplay.map(book => (
                <div key={book.id} className="book-landing">
                  <img src={`http://localhost:3000/CoverImages/${book.image}`} alt={book.title} width="150" height="200" />
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p> 
                  <p>Genre: {book.genre}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
      <br></br>

      <div className="buttonContainer">
        <p className="pi-land"><strong>Search by :</strong></p>
        <button className="searchBut" id="bestsellersButton">BESTSELLERS</button>
        <button className="searchBut" id="genresButton">GENRES</button>
      </div>
      <br></br>
    </div>
  </div>
);
}

export default LandingPage;