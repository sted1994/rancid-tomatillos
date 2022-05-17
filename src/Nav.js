import React from "react";
import "./css/nav.css";
import { Link } from 'react-router-dom';


const Nav = ({returnHome}) => {
  return (
    <nav className="nav">
      <Link to='/'>
        <img onClick={() => returnHome()} className='logo' src={require("./images/rancid-logo.png")}/>
      </Link>
    </nav>
  )
}



export default Nav;
