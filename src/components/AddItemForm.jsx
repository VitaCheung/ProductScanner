// import React, { useState } from 'react';
import {useState, useEffect}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";

const AddItemForm = ({ UPC, name, asin, img }) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_D_API_URL;
  const authToken = localStorage.getItem('Token'); 
  const user_id = localStorage.getItem('UserId');
  
  const [logged, setLogged] = useState(true);
  // const [saved, setSaved] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Check local storage on initial render
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const isItemSaved = savedItems.some((savedItem) => savedItem === asin);
    setIsBookmarked(isItemSaved);
  }, [asin]);
  console.log(isBookmarked);
  console.log('id:'+ user_id);
  console.log('1UPC:'+ UPC);
  console.log('2name:'+ name);
  console.log('3asin:'+ asin);
  console.log('4img:'+ img);
  

  // Save item to SavedItem table
  const handleSubmit = () => {
    // User has to login if they're not logged
    if(!authToken){
      setLogged(false);
    } else {
      const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
      // Make the HTTP request to Laravel API's login endpoint
      fetch(`${apiUrl}/api/add-item`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ UPC, name, asin, img, user_id }),
      })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response 
        console.log(data);
          // Save item to local storage
          const updatedItems = [...savedItems, asin];
          localStorage.setItem('savedItems', JSON.stringify(updatedItems));
        // }
        setIsBookmarked(true);

      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
      // setSaved(true);

    }

  };

  function remove(){
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
      console.log('removing');
      // Make the HTTP request to Laravel API's login endpoint
      fetch(`${apiUrl}/api/delete-item-by-asin/${asin}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Remove item from local storage
          const updatedItems = savedItems.filter((savedItem) => savedItem !== asin);
          localStorage.setItem('savedItems', JSON.stringify(updatedItems));
          // window.location.reload();
          setIsBookmarked(false);
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error('Error:', error);
        });
  };

  let login = <div></div>;
  if(!logged){
    login = <h4 className="red"><NavLink to="/login">Login</NavLink> to save items!</h4>;
  }

  let savebtn =<div></div>;
  if(!isBookmarked){
    savebtn =  <button title="Save" id="nonfilled" onClick={handleSubmit}><FontAwesomeIcon icon="fa-regular fa-bookmark" size="2xl" /></button>;
  } else{
    savebtn = <button title="Unsave" id="filled" onClick={remove}><FontAwesomeIcon icon="fa-solid fa-bookmark" size="2xl" /></button>;
  }


  return (
    <div>
      {savebtn}
      {login}
   
    
    </div>
    
  );
};

export default AddItemForm;

// const getDetail = async () => {

  //   const url = 'https://parazun-amazon-data.p.rapidapi.com/product/?asin='+asin+'&region=CA';
  //   const options = {
  //   method: 'GET',
  //   headers: {
  //       'X-RapidAPI-Key': '993db5a0aamshe737b49dee5a1ddp18daf7jsnab8c338adc35',
  //       'X-RapidAPI-Host': 'parazun-amazon-data.p.rapidapi.com'
  //   }
  //   };
  //   let response = await fetch(url, options);
  //   let data = await response.json();
  //   // console.log(data);
  //   setasin(data.asin);

  // }
  // if (asin){
  // getDetail();};
