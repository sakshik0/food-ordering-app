import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu=()=>{
const [resInfo,setresInfo]=useState([]);
const {resId}=useParams();

    useEffect(()=>{
       fetchMenu();
    },[]);
    
    const fetchMenu=async()=>{
      const data=await fetch(MENU_API+resId);

      const json=await data.json();

      console.log(json);
      setresInfo(json.data);
    };

    if(resInfo.length===0)
    {
      return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards}=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

 return(
    <div className="menu">
   
        <h1>{name}</h1>
       <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
          <h2>Menu</h2>
          <h1>Recommended Dish</h1>
          <ul>
            {itemCards.map(item =><li key={item.card.info.id}> 
              {item.card.info.name} 
              <h4>Price - Rs.{(item.card.info.price || item.card.info.defaultPrice)/100}</h4>
            </li>)}
          </ul>
    </div>
 )
}

export default RestaurantMenu;