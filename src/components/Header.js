import React, { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
const Header=()=>{
  const [login,setlogin]=useState("Login");
 
    return(
        <div className="flex justify-between shadow-lg ">
          <div className="logo-container">
            <img className="w-40" src={LOGO_URL}></img>
          </div>
          <div className="flex items-center">
              <ul className="flex p-4 m-4">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"><Link to="/about">About us</Link></li>
                <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
                <li className="px-4"><Link>Cart</Link></li>
                <button className="login" onClick={()=>{
                  login==="Login"?setlogin("Logout"):setlogin("Login");
                }}>{login}</button>
              </ul>
          </div>
        </div>
    )
}

export default Header;