import React from "react";
import CDN_URL from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurants } = props;

  console.log(restaurants);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restaurants?.info;
  return (
    <div className="rounded-lg m-4 p-4 w-[250px] bg-gray-200 hover:bg-gray-300 ">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="logo"
      ></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <p>{cuisines.join(",")}</p>
      <h5>{avgRating} starts</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export const withpromotedlabel=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
