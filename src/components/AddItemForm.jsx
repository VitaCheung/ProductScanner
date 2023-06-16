// import React, { useState } from 'react';
import {useState, useEffect}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";

const AddItemForm = ({ UPC, name, asin, img }) => {
  const authToken = localStorage.getItem('Token'); 
  const userId = localStorage.getItem('UserId');
  // const [UPC, setUPC] = useState('');
  // const [name, setName] = useState('');
  // const [img, setImg] = useState('');
  // const [asin, setasin] = useState(asin);
  
  const [logged, setLogged] = useState(true);
  const [saved, setSaved] = useState(false);
  console.log('id:'+ userId);
  console.log('1UPC:'+ UPC);
  console.log('2name:'+ name);
  console.log('3asin:'+ asin);
  console.log('4img:'+ img);
  
  console.log('asin:'+asin);


    // var asin = "B07VF6VRMD";
  const handleSubmit = () => {
    
    if(!authToken){
      setLogged(false);
    } else {
      // Make the HTTP request to Laravel API's login endpoint
      fetch('https://productscanner.vitacheung.ca/api/add-item', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ UPC, name, asin, img }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response (e.g., store the token, update state, etc.)
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
      setSaved(true);

    }

  };

  function remove(){
    setSaved(false);
  }

  let login = <div></div>;
  if(!logged){
    login = <h4 className="red"><NavLink to="/login">Login</NavLink> to save items!</h4>;
  }

  let savebtn =<div></div>;
  if(!saved){
    savebtn =  <button id="nonfilled" onClick={handleSubmit}><FontAwesomeIcon icon="fa-regular fa-bookmark" size="2xl" /></button>;
  } else{
    savebtn = <button id="filled" onClick={remove}><FontAwesomeIcon icon="fa-solid fa-bookmark" size="2xl" /></button>;
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
