import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./registrationlogin.css";


function LoginForm() {

    // State for login
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
 
   //Login Message
   const [loginMsg, setLoginMsg] = useState('');
 
   //Redirect after Login
   const navigate = useNavigate();
 
   // Handle login submit
   const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
        loginEmail,
        loginPassword    
    };

    const response = await fetch('http://localhost:3000/api/custData');
    const data = await response.json('http://localhost:3000/api/custData');
    const { message } = data;

    try {
        const response = await fetch('http://localhost:3000/api/custData', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });


 
       if (data.message) {
         // Login successful
         setLoginMsg(data.message);
         navigate('/'); // Redirect to main app page
         
       } else {
         // Show error 
         setLoginMsg(data.error);
       }
 
     } catch(err) {
       console.error(err);
     }
   }
 
   return (
    <>
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

         <Link to="/registrationlogin">
            Don't have an account? Register here
         </Link>
       </form> 
     </div>
    </>
   );
 }

export default LoginForm
