import React, { useState } from 'react';

const RegisterForm = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_D_API_URL;
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirm] = useState('');
  const [msg, setMsg] = useState('');
  const [data, setData] = useState('');

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
    fetch(`${apiUrl}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ first, last, email, password, password_confirmation }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response 
        console.log(data);
        setMsg(data.message);
        setData(data);
        
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
        
      });
      
  };
  let ErrorMsg = <p></p>;
  let message =<p></p>;
  if(msg){
    message= <h3 className='red'>{msg}! <a href="/login">Login Now</a></h3>;
    document.getElementById("Reg_form").style.display = "none";
  } 
  if(data && !msg){
    const errorObject = JSON.parse(data);
    const errorArray = Object.values(errorObject);
    ErrorMsg = <p className='red'> {errorArray.map((error) => error[0]).join('')}</p>;
  }

  return (
    <div id="Register"> 
      <h2>Register</h2>
      {message}
    <form id="Reg_form" action="/home" onSubmit={handleSubmit} >
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
        {ErrorMsg}
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegisterForm;
