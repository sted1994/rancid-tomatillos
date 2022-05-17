import React from "react";
import "./css/poster.css";
import { Link } from 'react-router-dom';


const Poster = ({imagePath, backdropPath, title, rating, id, showMovieSummary}) => {
    return (
      <Link to={`/${id}`} onClick={(event) => showMovieSummary(event)}>
        <div id={id} className="poster">   
        <div className="poster-inner">
          <div className="poster-front">
            <img  id={id} className="poster-image" src={imagePath} alt={`movie poster for ${title}`}/>
            <h3 id={id}>{title}</h3>
          </div>
          <div id={id} className="poster-back">
            <img id={id} className="backdrop-image" src={backdropPath} alt={`alternative poster for ${title}`}/>
            <h1>{title}</h1>
            <h3>Average Rating : {rating}</h3>
          </div>
        </div>
        </div>
      </Link>
    )
}






export default Poster;
