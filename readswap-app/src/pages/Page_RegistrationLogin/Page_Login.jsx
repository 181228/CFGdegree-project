import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./registrationlogin.css";


function LoginForm() {
  const [loginUname, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loginMsg, setLoginMsg] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
        u_name: loginUname,
        password: loginPassword    
    };

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        const data = await response.json();

        if (response.ok) {
            // Login successful
            setLoginMsg(data.message);
            navigate('/'); // Redirect to main app page
        } else {
            setLoginMsg(data.error);
        }

    } catch(err) {
        console.error('Error during login:', err);
    }
}
    return (
      <div>
      <div className="form-container">
        <h2 className="form-header">Login</h2>
        <p>{loginMsg}</p>
  
        <form onSubmit={handleLoginSubmit}>
          <input
            className="form-input"
            placeholder="Username"
            type="text"
            value={loginUname}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
  
          <input
            className="form-input"
            placeholder="Password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
  
          <button className="form-button" type="submit">Login</button>

          <Link to="/register">
              Don't have an account? Register here
          </Link>
        </form> 
      </div>
      </div>
    );
  }

export default LoginForm
