import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestranuntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{

const {resId}=useParams();

const resInfo =useRestranuntMenu(resId);

    if(resInfo.length===0)
    {
      return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards}=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    const categories=
       resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( 
        (c) => c.card?.card?.["@type"]== 
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  //  console.log(categories);
 return(
    <div className="text-center">
       <h1 className="font-bold my-6 text-2xl">{name}</h1>
       <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
       {categories.map((category)=>
         <RestaurantCategory data={category?.card?.card}/>
       )}
    </div>
 )
}

export default RestaurantMenu;