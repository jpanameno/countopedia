import React from "react";
import logo from "../images/react.png";

function MainHeader(){
    return(
      <div className="pt-3 pl-2" style={{borderBottom: "1px solid #777"}}>
        <img src={logo} style={{height: "35px", verticalAlign: "top"}}></img> 
        <span className="h2 pt-4 m-2 text-white-50"> React Course - CountOpedia</span>      
      </div>
    )
  }
  
  const subHeaderStyle={
    color: "blueviolet",
    backgroundColor:"lightgray"
  }
  
  function SubHeader(){
    return(
      <div>        
      </div>
    )
  }
  
 class Header extends React.Component {
    render(){
      return(
      <div>
        <div><MainHeader /></div>
        <div><SubHeader /></div>
      </div>);
    }
}

  export default Header;