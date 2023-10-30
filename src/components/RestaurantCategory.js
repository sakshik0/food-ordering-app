import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=(data)=>{
   const[showitem,setshow]=useState(false);
   const handelclick=()=>{
      if(showitem==true)
      {
        setshow(false);
      }
      else{
        setshow(true);
      }
   }
    console.log(data);
    return(
        <div>
         <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
            <div className="flex justify-between" onClick={handelclick}>
            <span className="font-bold text-lg">{data.data.title}({data.data.itemCards.length})</span>
            <span>⬇</span>
            </div>
            {showitem && <ItemList items={data.data.itemCards}/>}
         </div>
       </div>
    )
}

export default RestaurantCategory;