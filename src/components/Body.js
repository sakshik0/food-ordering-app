import React, { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body=()=>{
  const [listofres,setlistofres] = useState(reslist);

  const [searchtext,setsearchtext]=useState("");

  const [filteredRestaurant,setfilteresRestaurant]=useState(reslist);

  useEffect(()=>{
    console.log("effect");
     //fetchData()
  },[]);
  
  // const fetchData= async ()=>{
  //   const data=await fetch(
            //call api("")
  //   );

  //   const json = await data.json;
  //   console.log(json);
  //   setlistofres()
  // };

  
  //conditional rendering

  if(listofres.length===0)
  {
    return <Shimmer/>
  }
   return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text" 
              className="search-box"
              value={searchtext}
              onChange={(e)=>{setsearchtext(e.target.value)}}
           />
            <button onClick={()=>{
               //console.log(searchtext);
                const list=listofres.filter((res)=>res.data.name.toLowerCase().includes(searchtext.toLowerCase()));
                setfilteresRestaurant(list);
            }}>Search</button>
          </div> 
          <button className="filter-btn" onClick={()=>{
           const restlist=listofres.filter((res)=>res.data.avgRating>4)
            setfilteresRestaurant(restlist);
          }}> 
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
           {
             filteredRestaurant.map((restaurant)=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
           }
        </div>
      </div>
    )
  }

  export default Body;