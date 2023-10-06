import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Defalut",
            }
        }
        //console.log(this.props.name+" constructor called");
    }
    async componentDidMount(){
       // console.log(this.props.name + ' Did mount');
       const data=await fetch("https://api.github.com/users/sakshik0");
       const json=await data.json();
       console.log(json);
       this.setState({
        userInfo:json,
       });
    }
    render(){
      //  console.log(this.props.name+" Render");
        const {name,location,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contacton: sam@gmail.com</h4>
            </div>
        )
    }
};
export default UserClass;