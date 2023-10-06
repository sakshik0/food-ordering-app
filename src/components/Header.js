import React, { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
const Header=()=>{
  const [login,setlogin]=useState("Login");
 
    return(
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
          </div>
          <div className="nav-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link>Cart</Link></li>
                <button className="login" onClick={()=>{
                  login==="Login"?setlogin("Logout"):setlogin("Login");
                }}>{login}</button>
              </ul>
          </div>
        </div>
    )
}

export default Header;