// import React, { useState } from 'react';
import {useState, useEffect}  from "react";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [missed, setMissed] = useState(false);
  const [unregistered, setUnregistered] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //validate the input
    if(email == null || email== ''){
      setMissed(true);
    }
    if(password == null || password== ''){
      setMissed(true);
    }
    // Make the HTTP request to Laravel API's login endpoint
    fetch('http://127.0.0.1:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response (e.g., store the token, update state, etc.)
        setToken(data.access_token);
        setUserId(data.user.id);
        console.log(data.access_token);
        // setLogged(true);
        console.log(data);
       
        window.location="/home";
        
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
        console.log('This account or the password is invalid.');
        setUnregistered(true);
      });
  };
  localStorage.setItem('Token', token);
  localStorage.setItem('UserId', userId);
//   console.log(2+ token);
  let ErrorMsg = <p></p>;
  if (!missed && unregistered){
    ErrorMsg = <p className="red">*This account or the password is invalid.</p>;
  } else if (missed){
    ErrorMsg = <p className="red">*Email or Password is missing.</p>;}
  else{
    ErrorMsg = <p></p>;
  }
  
  
  return (
    <form action="/home" onSubmit={handleSubmit} >
        <h2>Login</h2>
        <div className="email">
            <label htmlFor="email">Email Address:</label>
            <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" />  
        </div>
        <div className="password">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        </div>
        {ErrorMsg}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
