import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookActions({ userId, updateUserBooks }) {
    const [selectedBookId, setSelectedBookId] = useState('');
    const [userBooks, setUserBooks] = useState([]); // USER BOOK INFO
    const [bookOwners, setBookOwners] = useState({}); // BOOK OWNERSHIP INFO

    useEffect(() => {
        // GET USER BOOK INFO
        axios.get(`http://localhost:3000/api/customers/${userId}`)
            .then(response => {
                setUserBooks(response.data.book_id);
            })
            .catch(error => {
                console.error('Error fetching user books:', error);
            });

        // GET BOOK OWNERSHIP INFO
        axios.get('http://localhost:3000/api/customers')
            .then(response => {
                const owners = {};
                response.data.forEach(user => {
                    user.book_id.forEach(bookId => {
                        owners[bookId] = user.u_name;
                    });
                });
                setBookOwners(owners);
            })
            .catch(error => {
                console.error('Error fetching book owners:', error);
            });
    }, [userId]);

    const handleSwap = () => {
        // SWAP LOGIC
        const selectedBookOwner = bookOwners[selectedBookId];
        console.log(`User wants to swap book with id ${selectedBookId} from ${selectedBookOwner}`);
    };

    const handleReturn = () => {
        // RETURN LOGIC
        const selectedBookOwner = bookOwners[selectedBookId];
        console.log(`User wants to return book with id ${selectedBookId} to ${selectedBookOwner}`);
    };

    return (
        <div>
            <select onChange={(e) => setSelectedBookId(e.target.value)}>
                <option value="">Select a book</option>
                {userBooks.map(bookId => (
                    <option key={bookId} value={bookId}>
                        {/* BOOK NAME */}
                    </option>
                ))}
            </select>
            <button onClick={handleSwap}>Borrow</button>
            <button onClick={handleReturn}>Return</button>
        </div>
    );
}

export default BookActions;
