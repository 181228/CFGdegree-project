import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./registrationlogin.css";
import RegistrationForm from './RegistrationForm'; 
import LoginForm from './LoginForm';

function RegistrationLogin() {

  const [showRegistration, setShowRegistration] = useState(true);

  return(
    <>
    <div>
      {showRegistration ? (
        <RegistrationForm />
      ) : (
        <LoginForm />
      )}

        <Link to="/login" onClick={() => setShowRegistration(false)}>
        Log in
        </Link>
    </div>
    </>
  )
}


export default RegistrationLogin;


