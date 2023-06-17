import {useState, useEffect}  from "react";

const Logout = () => {
  
  const [logged, setLogged] = useState(true);
  const apiUrl = import.meta.env.VITE_REACT_APP_D_API_URL;

  // Make the HTTP request to Laravel API's login endpoint
  fetch(`${apiUrl}/api/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response
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
