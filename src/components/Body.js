import React, { useState, useEffect } from "react";
import RestaurantCard,{withpromotedlabel} from "./RestaurantCard";
//import reslist from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofres, setlistofres] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  const [filteredRestaurant, setfilteresRestaurant] = useState([]);

  const RestaurantCardPromoted=withpromotedlabel(RestaurantCard);
  useEffect(() => {
   // console.log("effect");
   fetchData();
  }, []);
  
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false)
  {
       return (
        <h1>Looks like you'r offline check your internet</h1>
       )
  }
  const fetchData = async () => {
      const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();

      console.log(json);
      
      setlistofres(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteresRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //conditional rendering

  if (listofres === null) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //console.log(searchtext);
              const list = listofres.filter((res) =>
                res.info?.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteresRestaurant(list);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const restlist = listofres.filter((res) => res.info?.avgRating > 4);
            setfilteresRestaurant(restlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurants) => (
          <Link  key={restaurants?.info?.id} to={"/restaurants/"+restaurants?.info?.id} >
          {restaurants?.info?.promoted ? (<RestaurantCardPromoted restaurants={restaurants}/>):(<RestaurantCard restaurants={restaurants}/>) }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;