import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./registrationlogin.css";


function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loginMsg, setLoginMsg] = useState('');
  const history = useNavigate();

  const handleLoginSubmit = async (e) => {
      e.preventDefault();

      const loginData = {
      loginEmail,
      loginPassword
      };

      try {
      const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.status === 200) {
          setLoginMsg(data.message);
          history.push('/'); // Redirect to main app page on successful login
      } else {
          setLoginMsg(data.error);
      }

      } catch (err) {
      console.error(err);
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
            placeholder="Email"
            type="email"
            value={loginEmail}
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
