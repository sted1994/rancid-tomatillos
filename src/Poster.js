import React from "react";
import "./css/poster.css";


const Poster = ({imagePath, title, id, showMovieSummary}) => {
    return (
      <div  id={id} onClick={(event) => showMovieSummary(event)} className="poster">
        <img  id={id} className="poster-image" src={imagePath} alt={`movie poster for ${title}`}/>
        <h3 id={id}>{title}</h3>
      </div>
    )
}







export default Poster;
