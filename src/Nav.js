import React from "react";
import "./css/nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to='/'>
        <img alt="Blue Rancid Tomatillo Logo with old video camera" className='logo' src={require("./images/rancid-logo.png")}/>
      </Link>
    </nav>
  );
};

export default Nav;
