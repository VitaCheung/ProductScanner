// import React, { useState } from 'react';
import {useState, useEffect}  from "react";

const Logout = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [token, setToken] = useState("");
  const [logged, setLogged] = useState(true);

  const handleSubmit = () => {
    // event.preventDefault();

    // Make the HTTP request to Laravel API's login endpoint
    fetch('http://127.0.0.1:8000/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response (e.g., store the token, update state, etc.)
        // setToken(data.access_token);
        // console.log(data.access_token);
        setLogged(false);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });

    //   window.location="/";

  };
  localStorage.removeItem('Token');

  return (
      
      <button type="submit" onSubmit={handleSubmit}>Logout</button>
    
  );
};

export default Logout;
