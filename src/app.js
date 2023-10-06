import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//  * header
//  * logo
//  * nav item
//  * Body
//  * - Search
//  * - Restaurant container
//  *  --> RCards
//  *  --> img,
//  *  -->name of res, star rating , cuisine , delivery time etc.
//  * Footer
//  * -copyright
//  * -links
//  * -addres

const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
  return(
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}
//for adding at git 
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
     },
     {
       path:"/contactus",
       element:<ContactUs/>,
     },
     {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
     },
     {
      path:"/grocery",
      element:<Suspense><Grocery/></Suspense>,
     }
    ],
    errorElement:<Error/>
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);