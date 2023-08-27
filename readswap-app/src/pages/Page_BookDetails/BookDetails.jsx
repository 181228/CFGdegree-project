import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./bookdetails.css";
import axios from 'axios';
import { Product } from "../../components/Product";
import { BOOK_FINDER_API_KEY, BOOK_FINDER_API_HOST } from '../../utils/apiConfig.js';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [bookOwner, setBookOwner] = useState('');

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
                const bookTitle = data.title;

                axios.get(`http://localhost:3000/api/books/${id}/owner`)
                    .then(response => {
                        setBookOwner(response.data.owner);
                    })
                    .catch(error => {
                        console.error('Error fetching additional book info:', error);
                    });

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
        <div>
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
                                <div className="book-description-api" style={{ fontWeight: 'lighter' }}>
                                {book.additionalInfoFromAPI && book.additionalInfoFromAPI.results && book.additionalInfoFromAPI.results.length > 0 ? (
                                    <div dangerouslySetInnerHTML={{ __html: book.additionalInfoFromAPI.results[0].summary }} />
                                ) : (
                                    <p>Description not found.</p>
                                )}
                                </div>
                                <p>
                                    <b>Ready to swap with:</b> {bookOwner}
                                </p>
                                <div className="buy-product-wrapper">
                                <button><Link className="buy-button" to="/payment">BUY</Link></button>
                                <Product
                                    id={book.id}
                                    title={book.title}
                                    price={book.price}
                                    image={book.image}
                                    showAddToCartButton={true}
                                />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BookDetails;