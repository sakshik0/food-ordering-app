import { useState,useEffect } from "react";
import { MENU_API } from "./constants";

const useRestranuntMenu=(resId)=>{
    //fetch data

    const [resInfo,setresInfo]=useState([]);
    useEffect(()=>{
        fetchMenu();
     },[]);
     
    const fetchMenu=async()=>{
       const data=await fetch(MENU_API+resId);
 
       const json=await data.json();
 
       console.log(json);
       setresInfo(json.data);
     };

    return resInfo;
}

export default useRestranuntMenu;
