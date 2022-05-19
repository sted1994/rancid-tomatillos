import React from "react";
import "./css/poster.css";
import { NavLink } from 'react-router-dom';


const Poster = ({ imagePath, backdropPath, title, rating, id }) => {
    return (
      <NavLink to={`/${id}`} >
       <div id={id} className="poster">
        <div className="poster-inner">
        <div className="poster-front">
          <img id={id} className="poster-image" src={imagePath} alt={`movie poster for ${title}`}/>
          <h3 id={id}>{title}</h3>
        </div>
        <div id={id} className="poster-back">
          <img id={id} className="backdrop-image" src={backdropPath} alt={`alternative poster for ${title}`}/>
          <h1 id={id}>{title}</h1>
          <h3 id={id}>Average Rating : {rating}</h3>
        </div>
       </div>
      </div>
      </NavLink>
    )
}






export default Poster;
