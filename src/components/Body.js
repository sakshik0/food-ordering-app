import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofres, setlistofres] = useState(reslist);

  const [searchtext, setsearchtext] = useState("");

  const [filteredRestaurant, setfilteresRestaurant] = useState(reslist);

  useEffect(() => {
    console.log("effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9665806&lng=77.724865&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json;
    console.log(json);
    setlistofres(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering

  if (listofres.length === 0) {
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
                res.data.name.toLowerCase().includes(searchtext.toLowerCase())
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
            const restlist = listofres.filter((res) => res.data.avgRating > 4);
            setfilteresRestaurant(restlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <RestaurantCard
            key={restaurants?.data.id}
            restaurants={restaurants}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
