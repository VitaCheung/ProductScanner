// import React, { useState } from 'react';
import {useState, useEffect}  from "react";
import Home from "../routes/Home";

const Logout = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [token, setToken] = useState("");
  const [logged, setLogged] = useState(true);

  
    // event.preventDefault();

    // Make the HTTP request to Laravel API's login endpoint
    fetch('https://productscanner.vitacheung.ca/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response (e.g., store the token, update state, etc.)
        
        // console.log(data.access_token);
        setLogged(false);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
      localStorage.removeItem('Token');
      localStorage.removeItem('UserId');
      alert("Successfully logged out.");
      window.location="/";

  
  
  return (

    <div></div>
    
  );
};

export default Logout;
