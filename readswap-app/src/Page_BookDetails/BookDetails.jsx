<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
=======
<<<<<<< Updated upstream
// BookDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
=======
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
>>>>>>> Stashed changes
import "./bookdetails.css";
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import { BOOK_FINDER_API_KEY, BOOK_FINDER_API_HOST } from '../utils/apiConfig.js';
<<<<<<< Updated upstream

function BookDetails() {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    const [bookOwner, setBookOwner] = useState('');
=======
import { ShopContext } from '../context/shop-context.jsx'
>>>>>>> Stashed changes

function BookDetails() {
    const { id } = useParams();
<<<<<<< Updated upstream
    const [book, setBook] = useState(null);
=======
    const [bookOwner, setBookOwner] = useState('');
    const { addToCart } = useContext(ShopContext);
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    useEffect(() => {
        // SENDING REQUESTS TO LOCAL API, TO GET BOOK DATA
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
                
                const bookTitle = data.title;

<<<<<<< Updated upstream
                // SEND REQUEST TO LOCAL API, TO GET BOOK OWNERSHIP DATA
                axios.get(`http://localhost:3000/api/books/${id}/owner`)
                    .then(response => {
                        setBookOwner(response.data.owner);
                    })
                    .catch(error => {
                        console.error('Error fetching additional book info:', error);
                        console.log('Response:', error.response);
                        console.log('Message:', error.message);
                    });
                
                // SENDING REQUESTS TO BOOK FINDER API AND ASKING FOR ADDITIONAL DATA
                const bookFinderOptions = {
                    method: 'GET',
                    url: 'https://book-finder1.p.rapidapi.com/api/search',
                    params: {
                        title: bookTitle,
                    },
                    headers: {
                        'X-RapidAPI-Key': BOOK_FINDER_API_KEY,
                        'X-RapidAPI-Host': BOOK_FINDER_API_HOST
                    }
                };
    
                axios.request(bookFinderOptions)
                    .then(response => {
                        const bookDataFromAPI = response.data;
                        setBook(prevBook => ({
                            ...prevBook,
                            additionalInfoFromAPI: bookDataFromAPI,
                        }));
                    })
                    .catch(error => {
                        console.error('Error fetching additional book info:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
            });
    
    }, [id]);    

    return (
=======
<<<<<<< Updated upstream
    if (!book) {
    return <div>Loading...</div>;
    }

    return (
    <div id="bookDetails">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Condition: {book.condition}</p>
        <p>Trade For: {book.trade_for}</p>
        <p>Price: £ {book.price}</p>
        <img src={book.image} alt={book.title + " cover"} width="200" />
        <p>Description: {book.description}</p>
        <button onClick={() => alert('Book added to cart!')}>Add to Cart</button>
        <button onClick={() => window.location.href = 'PaymentGateway.html'}>Buy</button>
    </div>
=======
        // SEND REQUEST TO LOCAL API, TO GET BOOK OWNERSHIP DATA
        axios.get(`http://localhost:3000/api/books/${id}/owner`)
            .then(response => {
                setBookOwner(response.data.owner);
            })
            .catch(error => {
                console.error('Error fetching additional book info:', error);
            });
        
        // SENDING REQUESTS TO BOOK FINDER API AND ASKING FOR ADDITIONAL DATA
        const bookFinderOptions = {
            method: 'GET',
            url: 'https://book-finder1.p.rapidapi.com/api/search',
            params: {
                title: bookTitle,
            },
            headers: {
                'X-RapidAPI-Key': BOOK_FINDER_API_KEY,
                'X-RapidAPI-Host': BOOK_FINDER_API_HOST
            }
        };

        axios.request(bookFinderOptions)
            .then(response => {
                const bookDataFromAPI = response.data;
                setBook(prevBook => ({
                    ...prevBook,
                    additionalInfoFromAPI: bookDataFromAPI,
                }));
            })
            .catch(error => {
                console.error('Error fetching additional book info:', error);
            });
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
            });
    
    }, [id]);    

    return (
>>>>>>> Stashed changes
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
                                    <p><b>Price:</b> £ {book.price}</p>
                                </div>
                                <div className="book-details-02">
                                    <p><b>Description:</b></p>
                                    {book.additionalInfoFromAPI && book.additionalInfoFromAPI.results && book.additionalInfoFromAPI.results.length > 0 ? (
                                        <div dangerouslySetInnerHTML={{ __html: book.additionalInfoFromAPI.results[0].summary }} />
                                    ) : (
                                        <p>Description not found.</p>
                                    )}
                                    <p>
                                        <b>Ready to swap with:</b> {bookOwner} 
                                    </p>
<<<<<<< Updated upstream
                                    <button onClick={() => alert('Book added to cart!')}>Add to Cart</button>
                                    <button><Link to="/payment">Buy</Link></button>
=======
                                    <button 
                                    className="addToCartBut" 
                                    onClick={() => {
                                        addToCart(book);
                                        alert('Book added to cart!');
                                    }}
                                    >
                                    CART
                                    </button>
                                    <button><Link to="/payment">BUY</Link></button>
>>>>>>> Stashed changes
                                </div>
                            </div>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </div>
            <Footer />
        </ div>
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    );
}

export default BookDetails;
