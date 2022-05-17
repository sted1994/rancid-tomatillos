import React from "react";
import "./css/nav.css";
import { NavLink } from 'react-router-dom';


const Nav = ({returnHome}) => {
  return (
    <nav className="nav">
      <NavLink to='/'>
        <img onClick={() => returnHome()} className='logo' src={require("./images/rancid-logo.png")}/>
      </NavLink>
    </nav>
  )
}



export default Nav;
