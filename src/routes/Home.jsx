import {NavLink} from "react-router-dom";
import Logout from "../components/Logout";
import React, { useEffect, useState } from 'react';


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
  if (logout) {
    logging = <Logout />;
  };

  let logbtn = <div></div>;
  if(logged){
    logbtn = <button type="submit" onClick={out} id="logout_btn"><li>Logout</li></button>;
  } else{
    logbtn = <NavLink to="/login"><li>Login</li></NavLink>;
  };


  return(
    <main id="main">
      {/* <h1>Homepage</h1> */}
      <div id="home">
        <h2>Search a product to see its reviews!</h2>
        
        <nav id="home-nav" aria-label="Main navigation">
          <ul>
            
            <NavLink to="/home"><li>Home</li></NavLink>
            
            <NavLink to="/scanner"><li>Barcode Scan</li></NavLink>
            
            <NavLink to="/about"><li>Product Search</li></NavLink>
            
            
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