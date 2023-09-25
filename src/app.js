import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
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



const AppLayout = ()=>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },
  {
     path:"/about",
     element:<About/>
  },
  {
    path:"/contactus",
    element:<ContactUs/>
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);