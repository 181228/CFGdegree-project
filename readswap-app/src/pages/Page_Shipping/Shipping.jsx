import React, { useState } from 'react';
import "./shipping.css";
import { useNavigate } from 'react-router-dom';

function Shipping(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        streetAddress: "",
        postcode: "",
        city: ""
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        streetAddress: false,
        postcode: false,
        city: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        const errors = {};
        for (const key in formData) {
            if (!formData[key]) {
                errors[key] = true;
            }
        }
        setFormErrors(errors);

        // If all fields are filled, redirect to payment page
        if (Object.keys(errors).length === 0) {
            navigate.push("/payment");
        }
    };

    return(

        <div className="ship-layout">
            <br></br>
            <br></br>
            <h2 className="ship-h2">Shipping Details</h2><br></br>
            <div className="ship-container">
            <form className="ship-details" onSubmit={handleSubmit}>
            <input
                className={`ship-input ${formErrors.firstName ? 'error' : ''}`}
                name="firstName"
                placeholder="Firstname"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
            />
            <input
                className={`ship-input ${formErrors.lastName ? 'error' : ''}`}
                name="lastName"
                placeholder="Lastname"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
            />
            <input
                className={`ship-input ${formErrors.email ? 'error' : ''}`}
                name="email"
                placeholder="Email address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <input
                className={`ship-input ${formErrors.streetAddress ? 'error' : ''}`}
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleInputChange}
            />
            <input
                className={`ship-input ${formErrors.postcode ? 'error' : ''}`}
                name="postcode"
                placeholder="Postcode"
                value={formData.postcode}
                onChange={handleInputChange}
            />
            <input
                className={`ship-input ${formErrors.city ? 'error' : ''}`}
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
            />
            
            <br></br>
            
            {Object.keys(formErrors).length > 0 && (
                <p className="error-message">Please fill in all fields.</p>
            )}
            <button  type="submit" id="Submit"> Submit </button> 

            </form>
            </div>
        </div>
    );
}

export default Shipping;
