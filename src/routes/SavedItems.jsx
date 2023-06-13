import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";

const SavedItems = () => {
  const [logged, setLogged] = useState(true);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    // Retrieve the authentication token from local storage
    const authToken = localStorage.getItem('Token'); 
    if(!authToken){
      setLogged(false);
    }
    fetch('http://127.0.0.1:8000/api/saved-items', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
      setSavedItems(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  let login = <div></div>;
  if(!logged){
    login = <h2><NavLink to="/login">Login</NavLink> to save items!</h2>;
  }

  let items = <div></div>;
  if(savedItems){
    items = <div>
              {savedItems.map((item) => (
                <div key={item.id} className='box'>
                  <img src={item.img} height="80" />

                  <div className='details'>
                  <h3>{item.name}</h3>
                  <p>Brand: {item.brand}</p>
                  <p>Barcode: {item.UPC}</p>
                  </div>
                  
                  <div className='buttons'>

                  </div>

                </div>
              ))}
            </div>;
  } else {
    items = <div>There is no item saved.</div>;
  }

  
  return (
    <div>
      <h2>Saved items</h2>
      {login}
      {/* Render the saved items on the interface */}
      {items}
      
    </div>
  );
};

export default SavedItems;
