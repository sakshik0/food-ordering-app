import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
//import reslist from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofres, setlistofres] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  const [filteredRestaurant, setfilteresRestaurant] = useState([]);

  useEffect(() => {
   // console.log("effect");
   fetchData();
  }, []);

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const restlist = listofres.filter((res) => res.info?.avgRating > 4);
            setfilteresRestaurant(restlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <Link  key={restaurants?.info?.id} to={"/restaurants/"+restaurants?.info?.id} >
          <RestaurantCard
            restaurants={restaurants}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;