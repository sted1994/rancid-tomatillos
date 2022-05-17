import React from "react";
import "./css/poster.css";


const Poster = ({imagePath, backdropPath, title, rating, id, showMovieSummary}) => {
    return (
      <div id={id} onClick={(event) => showMovieSummary(event)} className="poster">
       <div className="poster-inner">
        <div className="poster-front">
          <img  id={id} className="poster-image" src={imagePath} alt={`movie poster for ${title}`}/>
          <h3 id={id}>{title}</h3>
        </div>
        <div id={id} onClick={(event) => showMovieSummary(event)} className="poster-back">
          <img id={id} className="backdrop-image" src={backdropPath} alt={`alternative poster for ${title}`}/>
          <h1 id={id}>{title}</h1>
          <h3 id={id}>Average Rating : {rating}</h3>
        </div>
       </div>
      </div>
    )
}






export default Poster;
