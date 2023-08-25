// RegistrationForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import { Link } from 'react-router-dom';
import "./registrationlogin.css";

function RegistrationForm() {
    const [registerData, setRegisterData] = useState({
        f_name: '',
        l_name: '',
        u_name: '',
        email: '',
        city: '',
        password: '',
        y_birth: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const [registerMessage, setRegisterMessage] = useState('');

    const history = useNavigate(); // Get the history object for navigation

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        const data = await response.json();

        if (response.status === 201) {
            setRegisterMessage(data.message);
            history.push('/login'); // Navigate to login page on successful registration
        } else {
            setRegisterMessage(data.error);
        }

        } catch (err) {
        console.error(err);
        }
    }

    return (
        <div className="form-container">
        <h2 className="form-header">Register</h2>
        <p>{registerMessage}</p>

        <form onSubmit={handleRegisterSubmit}>
                <input
            className="form-input" 
            placeholder="First name"
            type="text"
            value={registerData.f_name}
            onChange={handleInputChange}
            />

            <input
            className="form-input" 
            placeholder="Last name"
            type="text"
            value={registerData.l_name}
            onChange={handleInputChange}
            />

            <input
            className="form-input" 
            placeholder="Username"
            type="text"
            value={registerData.u_name}
            onChange={handleInputChange} 
            />

            <input
            className="form-input"
            placeholder="City"
            type="text"
            value={registerData.city}
            onChange={handleInputChange}
            />

            <input
            className="form-input"
            placeholder="Password"
            type="password"
            value={registerData.password}
            onChange={handleInputChange}
            />
            
            <input
            className="form-input"
            placeholder="Year of birth"
            type="number" // Use type "number" for year of birth
            name="y_birth" // Set the name attribute
            value={registerData.y_birth} // Use registerData.y_birth
            onChange={handleInputChange} // Use the common input change handler
            />

            <button className="form-button" type="submit">Register</button>
            <Link to="/login">
              Already have an account? Login here
            </Link>
        </form>
        </div>
    );
}

export default RegistrationForm;