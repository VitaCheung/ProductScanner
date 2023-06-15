import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import Delete from "../components/Delete";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SavedItems = () => {
  const [logged, setLogged] = useState(true);
  const [savedItems, setSavedItems] = useState([]);
  const [deleteRequest, setDeleteRequest] = useState(false);
  // Retrieve the authentication token from local storage
  const authToken = localStorage.getItem('Token'); 

  useEffect(() => {
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
      console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // function Throw(){
  //   setDeleteRequest(true);
  // }
  // let bin = <div></div>;
  // if (deleteRequest){
  //   bin = ;
  // }


  let login = <div></div>;
  if(!logged){
    login = <h2><NavLink to="/login">Login</NavLink> to save items!</h2>;
  }


  let items = <div></div>;
  if(savedItems){
    items = <div>
              {savedItems.map((item) => (
                <div key={item.id} className='items'>
                  <div className='left'>
                    <img src={item.img} height="80" />
                      <div className='details'>
                        <h3>{item.name}</h3>
                        <p>Asin: {item.asin}</p>
                        <p>Ref: {item.UPC}</p>
                      </div>
                  </div>
                  
                  <div className='buttons'>
                    <Delete id={item.id} />
                    
                  </div>

                </div>
              ))}
            </div>;
  } 
  if(savedItems==''){
    items = <p className='noitem'>There is no item saved.</p>;
  }

  

  
  return (
    <main id="SavedItemsPage">
      <h1>Saved items</h1>
      {login}
      {/* Render the saved items on the interface */}
      {items}
      
    </main>
  );
};

export default SavedItems;

