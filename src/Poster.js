import React from "react";
import "./css/poster.css";
import { NavLink } from 'react-router-dom';


const Poster = ({ imagePath, backdropPath, title, rating, id }) => {
  return (
    <NavLink className="poster" id={id} to={`/${id}`} >
      <div className="poster-inner">
        <section className="poster-front">
          <img id={id} className="poster-image" src={imagePath} alt={`movie poster for ${title}`}/>
          <h2 id={id}>{title}</h2>
        </section>
        <section id={id} className="poster-back">
          <img id={id} className="backdrop-image" src={backdropPath} alt={`alternative poster for ${title}`}/>
          <h2 id={id}>{title}</h2>
          <p id={id}>Average Rating : {rating}</p>
        </section>
      </div>
    </NavLink>
  );
};

export default Poster;
