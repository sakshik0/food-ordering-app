import { useState } from "react";

const User=(props)=>{
    const [count,setcount]=useState(0);
    return(
        <div className="user-card">
            <h2>count = {count}</h2>
            <h2>Name : {props.name}</h2>
            <h3>Location : Lucknow</h3>
            <h4>Contacton : sam@gmail.com</h4>
        </div>
    )
};

export default User;