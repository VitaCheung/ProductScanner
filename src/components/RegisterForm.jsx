import React, { useState } from 'react';

const RegisterForm = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirm] = useState('');
  const [msg, setMsg] = useState('');


  const handleFirstChange = (event) => {
    setFirst(event.target.value);
  };
  const handleLastChange = (event) => {
    setLast(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make the HTTP request to Laravel API's Register endpoint
    fetch('http://127.0.0.1:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ first, last, email, password, password_confirmation }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response (e.g., store the token, update state, etc.)
        setMsg(data.message);
        console.log(data);
        console.log(msg);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
      window.location="/login";
  };

  let message =<div></div>;
  if(msg){
    message= <h3>{msg}! <a href="/login">Login Now</a></h3>;
  }

  return (
    <div id="Register"> 
      <h2>Register</h2>
      {message}
    <form action="/home" onSubmit={handleSubmit} >
        <div className="first">
            <label htmlFor="first">First Name:</label>
            <input type="text" value={first} onChange={handleFirstChange} placeholder="First Name" />  
        </div>
        <div className="last">
            <label htmlFor="last">Last Name:</label>
            <input type="text" value={last} onChange={handleLastChange} placeholder="Last Name" />  
        </div>
        <div className="email">
            <label htmlFor="email">Email Address:</label>
            <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" />  
        </div>
        <div className="password">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        </div>
        <div className="password_confirmation">
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input type="password" value={password_confirmation} onChange={handlePasswordConfirm} placeholder="Confirm Password" />
        </div>
      
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegisterForm;
