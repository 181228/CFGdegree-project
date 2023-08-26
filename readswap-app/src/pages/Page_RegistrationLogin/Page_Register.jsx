import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        y_birth: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };  

    const [registerMessage, setRegisterMessage] = useState('');

    const navigate = useNavigate(); // Get the navigate object for navigation
    
    const userAge = new Date().getFullYear() - parseInt(registerData.y_birth);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        const data = await response.json();

        if (response.status === 201) {
            setRegisterMessage(data.message);
            navigate('/login'); // Navigate to login page on successful registration
        } else {
            if (userAge < 18) {
                setRegisterMessage("You are underage and cannot register.");
            } else {
                setRegisterMessage(data.error);
            }};

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
            name="f_name"
            value={registerData.f_name}
            onChange={handleInputChange}
            />

            <input
            className="form-input" 
            placeholder="Last name"
            type="text"
            name="l_name"
            value={registerData.l_name}
            onChange={handleInputChange}
            />

            <input
            className="form-input" 
            placeholder="Username"
            type="text"
            name="u_name"
            value={registerData.u_name}
            onChange={handleInputChange} 
            />

            <input
            className="form-input" 
            placeholder="Email"
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleInputChange} 
            />

            <input
            className="form-input"
            placeholder="City"
            type="text"
            name="city"
            value={registerData.city}
            onChange={handleInputChange}
            />

            <input
            className="form-input"
            placeholder="Password"
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleInputChange}
            />
            
            <input
            className="form-input"
            placeholder="Year of birth"
            type="number"
            name="y_birth"
            value={registerData.y_birth}
            onChange={handleInputChange}
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