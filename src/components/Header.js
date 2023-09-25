import React, { useState } from "react";
import {LOGO_URL} from "../utils/constants";
const Header=()=>{
  const [login,setlogin]=useState("Login");
   
  
  
    return(
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
          </div>
          <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                  login==="Login"?setlogin("Logout"):setlogin("Login");
                }}>{login}</button>
              </ul>
          </div>
        </div>
    )
}

export default Header;