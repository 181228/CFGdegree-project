import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./login.css";


function Login() {
  const [loginUname, setLoginUname] = useState('');
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
              localStorage.setItem("token", data.token); // Zapisanie tokenu w localStorage
              setLoginMsg(data.message);
              navigate('/'); // Redirect to main app page
          } else {
              setLoginMsg(data.error);
          }

      } catch(err) {
          console.error('Error during login:', err);
      }
};

    return (
      <div>
      <div className="login-details">
        <h2 className="login-h2">Login</h2>
        <p>{loginMsg}</p>
  
        <form onSubmit={handleLoginSubmit}>
          <input
            className="login-input"
            placeholder="Username"
            type="text"
            value={loginUname}
            onChange={(e) => setLoginUname(e.target.value)}
          />
  
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <div className='log-buttons-container'>
            <button className="login-button" type="submit">Login</button>

            <Link to="/register" className='login-link'>
                Don't have an account? Register here
            </Link>
          </div>
        </form> 
      </div>
      </div>
    );
  }

export default Login;
