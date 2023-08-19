import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./bookdetails.css";
import Header from '../Header';
import Footer from '../Footer';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
    fetch(`/api/books/${id}`)
        .then(response => response.json())
        .then(data => setBook(data))
        .catch(error => console.error('Error fetching book details:', error));
    }, [id]);

    if (!book) {
    return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <h1>Book Listing</h1>
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
            <Footer />
        </ div>
    );
}

export default BookDetails;
