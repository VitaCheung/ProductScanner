import {useState, useEffect}  from "react";

const LoginForm = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_D_API_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState("");
  // const [userId, setUserId] = useState("");
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
    if(email == null || email== '' || password == null || password== ''){
      setMissed(true);
    } else {
    
    // Make the HTTP request to Laravel API's login endpoint
    fetch(`${apiUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response (e.g., store the token, update state, etc.)
        console.log(data);
        localStorage.setItem('Token', data.access_token);
        localStorage.setItem('UserId', data.user.id);
        window.location="/home";
        
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
        console.log('This account or the password is invalid.');
        setUnregistered(true);
      });
  };

  };

  let ErrorMsg = <p></p>;
  if (unregistered){
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
