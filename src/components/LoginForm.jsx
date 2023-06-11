import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState("");
  const [logged, setLogged] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
        console.log(data.access_token);
        setLogged(true);
        console.log(data);
        console.log(1+ token);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
    //   window.location="/";
  };

  return (
    <form action="/home" onSubmit={handleSubmit} >
        <div className="email">
            <label htmlFor="email">Email Address:</label>
            <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" />  
        </div>
        <div className="password">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        </div>
      
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
