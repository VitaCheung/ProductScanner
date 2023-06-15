import {NavLink} from "react-router-dom";
import Logout from "../components/Logout";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  const authToken = localStorage.getItem('Token'); 
  // const [logged, setLogged] = useState(true);
  const [logged, setLogged] = useState(authToken ? true : false); 
  const [logout, setlogout] = useState(false);
  
  // if(!authToken){
  //   setLogged(false);
  // };

  function out(){
      setlogout(true);
  };
  let logging = <div></div>;
  let welcome = <div></div>;
  if (logout) {
    logging = <Logout />;
  };

  let logbtn = <NavLink to="/login"><li>Login</li></NavLink>;
  if(logged){
    welcome = <h2 className='red'>You're logged in!</h2>
    logbtn = <button type="submit" onClick={out} id="logout_btn"><li>Logout</li></button>;
  };


  return(
    <main id="main">
      {/* <h1>Homepage</h1> */}
      <div id="home">
        {welcome}
        <h2>Search a product to see its reviews!</h2>
        
        <nav id="home-nav" aria-label="Main navigation">
          <ul>
            
            <NavLink to="/home"><li><FontAwesomeIcon icon="fa-solid fa-house" size="xl" />  Home</li></NavLink>
            
            <NavLink to="/scanner"><li><FontAwesomeIcon icon="fa-solid fa-barcode" size="xl" />  Barcode Scan</li></NavLink>
            
            <NavLink to="/about"><li><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl" />  Product Search</li></NavLink>
            
            
            {logbtn}
            {logging}
            
          </ul>
        </nav>
        
        
      </div>
    </main>


  );
}


// {"response_code":0,
// "results":[{"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"The color orange is named after the fruit.","correct_answer":"True","incorrect_answers":["False"]}]
// }