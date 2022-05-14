import React from "react";
import "./css/nav.css"


const Nav = ({returnHome}) => {
  return (
    <nav className="nav">
      <img onClick={() => returnHome()} className='logo' src={require("./images/rancid-logo.png")}/>
    </nav>
  )
}



export default Nav;
