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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
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
                
                // DISPLAY SUCCESS MESSAGE
                window.alert('Book posted!');
            } else {
                // PLACE FOR HANDLING ERRORS
            }
            } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };
    

    return (
        <div className="upload-form">
        <br />
        <br />
        <br />
        <div className="upload-details">
        <h2 className="upload-h2">Upload a Book</h2>
        <form onSubmit={handleSubmit}>
            {/* Owner's Email */}
            <label className="upload-label">User ID:</label>
            <input
                className="upload-input"
                type="number"
                name="user_id"
                value={formData.ownerMail}
                onChange={handleInputChange}
                required
            />

            {/* Book Title */}
            <label className="upload-label">Book Title:</label>
            <input
                className="upload-input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
            />

            {/* Book Author */}
            <label className="upload-label">Book Author:</label>
            <input
                className="upload-input"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
            />

            {/* Book Genre */}
            <label className="upload-label">Book Genre:</label>
            <input
                className="upload-input"
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                required
            />

            {/* Book Condition */}
            <label className="upload-label">Book Condition:</label>
            <input
                className="upload-input"
                type="text"
                name="condition"
                value={formData.condition}
                onChange={handleInputChange}
                required
            />

            {/* Trade for */}
            <label className="upload-label">Trade for:</label>
            <input
                className="upload-input"
                type="text"
                name="tradeFor"
                value={formData.tradeFor}
                onChange={handleInputChange}
                required
            />

            {/* Book Price */}
            <label className="upload-label">Book Price:</label>
            <input
                className="upload-input"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
            />

            {/* Book Image */}
            <label className="upload-label">Book Image:</label>
            <input
                className="upload-button"
                type="file"
                accept="image/*"
                name="image"
                onChange={handleInputChange}
                required
            />

            {/* Submit button */}
            <button type="submit">Upload Book</button>
        </form>
        </div>
        </div>
    );
};

export default BookUploadForm;
