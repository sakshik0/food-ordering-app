
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props)
  {
    super(props);
   // console.log("Parent constructor called");
  }

  componentDidMount(){
      //  console.log("Parent Did Mount");
  }
  render() {
   // console.log("Parent Render is Called");
    return(
      <div> 
          <h1>About Us</h1>
          <h2>this is about of the page</h2>
          <UserClass name={"First"} location = {"Lucknow"}/>
      </div>
    )
  }
}

export default About;