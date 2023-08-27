import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function SearchResults() {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');
    const [matchingBooks, setMatchingBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/search-results?query=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                console.log('Matching books:', data);
                setMatchingBooks(data);
            })
            .catch(error => console.error('Error fetching matching books:', error));
    }, [searchQuery]);

    return (
        <div className="bl-container">
            <br />
            <br />
            <h2>Search Results for: {searchQuery}</h2>
            <Link to={`/search-results?query=${searchQuery}`}></Link>

            <ul>
                {matchingBooks.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;