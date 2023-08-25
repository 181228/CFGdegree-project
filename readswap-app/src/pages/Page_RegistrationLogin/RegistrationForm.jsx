import React, { useState } from 'react';
import "./registrationlogin.css";
import { useNavigate } from 'react-router-dom';


function RegistrationForm(){
    
   // State for Registration
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   //Register Message
  const[registerMessage, setRegisterMessage] = useState('');

  const navigate = useNavigate();

    //Handle Registration Logic
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
        name,
        email, 
        password
      };
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      });
        
      const data = await response.json();

    // try {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({name, email, password})  
    //   });


      if (data.message) {
        // Registration successful
        setRegisterMessage('Registration successful. Please login.');
        navigate('/login')

      } else {
        // Show error
        setRegisterMessage(data.error);
      }

    } catch(err) {
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
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />

        <input
          className="form-input"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button className="form-button" type="submit">Register</button>
      </form>

    </div>
  );
}

export default RegistrationForm