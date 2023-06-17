// import React, { useState } from 'react';
import {useState, useEffect}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Home from "../routes/Home";

const Delete = ({id, asin} ) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_D_API_URL;
  const authToken = localStorage.getItem('Token'); 
  console.log(id);
  console.log(asin);
  // const item_id = id.toString();
  // console.log(item_id);
  
  const DeleteItem = () => {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    console.log('removing');
  
    // Make the HTTP request to Laravel API's login endpoint
    fetch(`${apiUrl}/api/delete-item/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(asin);
        // Remove item from local storage
        const updatedItems = savedItems.filter((savedItem) => savedItem !== asin);
        localStorage.setItem('savedItems', JSON.stringify(updatedItems));
        window.location.reload();
        
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
      
    };

  return (

    <div> 
      <button type="submit" onClick={DeleteItem} id="delete_btn"><FontAwesomeIcon icon="fa-solid fa-trash-can" size="xl" /></button>
    </div>
    
  );
};

export default Delete;
