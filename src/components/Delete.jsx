// import React, { useState } from 'react';
import {useState, useEffect}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Home from "../routes/Home";

const Delete = (id) => {
  const authToken = localStorage.getItem('Token'); 
  const item_id = id.id;
 
  const DeleteItem = async () => {

    // Make the HTTP request to Laravel API's login endpoint
    fetch('http://127.0.0.1:8000/api/delete-item/'+item_id, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
      window.location.reload();
    }

  return (

    <div> 
      <button type="submit" onClick={DeleteItem} id="delete_btn"><FontAwesomeIcon icon="fa-solid fa-trash-can" size="xl" /></button>
    </div>
    
  );
};

export default Delete;
