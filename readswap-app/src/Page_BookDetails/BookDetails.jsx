import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./bookdetails.css";
import Header from '../Header';
import Footer from '../Footer';

function BookDetails() {

    const [book, setBook] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/books/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched data:", data);
                setBook(data);
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
            });
    }, [id]);    

    return (
        <div>
            <Header />
                <h1>Book Details</h1>
                <div className='book-layout'>
                    <div className="book-container">
                        {book ? (
                            <div>
                                <div className="book-details-01">
                                    <h2>{book.title}</h2>
                                    <img src={`http://localhost:3000/CoverImages/${book.image}`} alt={book.title + " cover"} width="200" />
                                    <p><b>Author:</b> {book.author}</p>
                                    <p><b>Genre:</b> {book.genre}</p>
                                    <p><b>Condition:</b> {book.condition}</p>
                                    <p><b>Trade For:</b> {book.trade_for}</p>
                                    <p><b>Price:</b> £ {book.price}</p>
                                    <button onClick={() => alert('Book added to cart!')}>Add to Cart</button>
                                    <button><Link to="/payment">Buy</Link></button>
                                </div>
                                <div className="book-details-02">
                                    <p><b>Goodreads Description:</b> {book.description}</p>
                                    <p><b>Trade for:</b> {book.trade_for}</p>
                                </div>
                            </div>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </div>
            <Footer />
        </ div>
    );
}

export default BookDetails;
