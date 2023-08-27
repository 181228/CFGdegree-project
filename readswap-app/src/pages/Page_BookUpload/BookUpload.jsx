import React, { useState } from 'react';
import "./bookupload.css";

const BookUploadForm = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        title: '',
        author: '',
        genre: '',
        condition: '',
        trade_for: '',
        price: '',
        image: '',
    });

    const [error, setError] = useState(null);
    const [tokenMissing, setTokenMissing] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if token is missing
        if (tokenMissing) {
            setError('Token is missing. Please log in.');
            return;
        }

        // Check if username is provided
        if (!formData.username) {
            setError('Please enter a username before posting a book.');
            return;
        }

        try {
            // GET USER_ID BASED ON USERNAME
            const username = formData.username;

            const userIdResponse = await fetch(`http://localhost:3000/api/user-id/${username}`);

            if (!userIdResponse.ok) {
                throw new Error('User not found');
            }

            const userIdData = await userIdResponse.json();

            // Check if all required fields are filled
            const requiredFields = ['title', 'author', 'genre', 'condition', 'trade_for', 'price', 'image'];
            const missingFields = requiredFields.filter(field => !formData[field]);

            if (missingFields.length > 0) {
                setError('Please fill in all required fields');
                return;
            }

            // SET USER_ID IN FORMDATA BASED ON RESULT OF A QUERY
            setFormData((prevData) => ({
                ...prevData,
                user_id: userIdData.id,
            }));

            const response = await fetch('http://localhost:3000/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // RESET FORM FIELDS
                setFormData({
                    user_id: '',
                    title: '',
                    author: '',
                    genre: '',
                    condition: '',
                    trade_for: '',
                    price: '',
                    image: '',
                });
                // RESET ERRORS
                setError(null);
                setTokenMissing(false);
                // DISPLAY SUCCESS MESSAGE
                window.alert('Book posted!');
            } else {
                // PLACE FOR HANDLING ERRORS
                if (response.status === 401) {
                    setError('Unauthorized. Please log in.');
                } else if (response.status === 400) {
                    setError('Bad request. Please check your data.');
                } else {
                    setError('Error posting book');
                }
            }
        } catch (error) {
            setError('Error during form submission');
        }
    };    
    

    return (
        <div className="upload-form">
        <br />
        <br />
        <br />
        <div className="upload-details">
        <h2 className="upload-h2">Upload a Book</h2>
        {error && <p className="error-message">{error}</p>}
        {tokenMissing && <p className="error-message">Token is missing. Please log in.</p>}
        <form onSubmit={handleSubmit}>
            {/* Owner's Username */}
            <input
                className="upload-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                required
            />

            {/* Book Title */}
            <input
                className="upload-input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Book Title"
                required
            />

            {/* Book Author */}
            <input
                className="upload-input"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Book Author"
                required
            />

            {/* Book Genre */}
            <input
                className="upload-input"
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                placeholder="Book Genre"
                required
            />

            {/* Book Condition */}
            <input
                className="upload-input"
                type="text"
                name="condition"
                value={formData.condition}
                onChange={handleInputChange}
                placeholder="Book Condition"
                required
            />

            {/* Trade for */}
            <input
                className="upload-input"
                type="text"
                name="trade_for"
                value={formData.trade_for}
                onChange={handleInputChange}
                placeholder="Trade For"
                required
            />

            {/* Book Price */}
            <input
                className="upload-input"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Book Price"
                required
            />

            {/* Book Image */}
            <label className="upload-label">Book Image:</label>
            <br />
            <input
                className="upload-button"
                type="file"
                accept="image/*"
                name="image"
                onChange={handleInputChange}
                placeholder="Book Image"
                required
            />

            {/* Submit button */}
            <button type="submit">UPLOAD</button>
        </form>
        </div>
        </div>
    );
};

export default BookUploadForm;
