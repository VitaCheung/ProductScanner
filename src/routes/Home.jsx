import {NavLink} from "react-router-dom";
import Header from "../components/Header";
import Logout from "../components/Logout";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  const authToken = localStorage.getItem('Token'); 
  const [logged, setLogged] = useState(authToken ? true : false); 
  const [logout, setlogout] = useState(false);

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
      <Header id="Head"/>
      <div id="home">
        {welcome}
        <h2>Search for a product to see the reviews!</h2>
        <nav id="home-nav" aria-label="Main navigation">
          <ul>
            <NavLink to="/scanner"><li><FontAwesomeIcon icon="fa-solid fa-barcode" size="xl" />  Barcode Scan</li></NavLink>
            <NavLink to="/about"><li><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl" />  Search</li></NavLink>
            <NavLink to="/saveditems"><li><FontAwesomeIcon icon="fa-solid fa-bookmark" size="xl" />  Bookmarks</li></NavLink>
            {logbtn}
            {logging}
          </ul>
        </nav>
      </div>
    </main>

  );
}


