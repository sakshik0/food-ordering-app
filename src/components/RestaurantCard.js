import React from "react";
import CDN_URL from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurants } = props;

  console.log(restaurants);

  const { cloudinaryImageId, name, cuisines, avgRating, minDeliveryTime } =
    restaurants?.data;
  return (
    <div className="res-card">
      <img
        className="resImg"
        src={CDN_URL + cloudinaryImageId}
        alt="logo"
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating} starts</h5>
      <h5>{minDeliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
