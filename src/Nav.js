import React from "react";
import "./css/nav.css"


const Nav = ({returnHome}) => {
  return (
    <nav className="nav">
      <button onClick={() => returnHome()}><img src={require("./images/rancid-logo.png")}/></button>
    </nav>
  )
}



export default Nav;
