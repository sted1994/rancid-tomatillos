import React from "react";
import "./css/poster.css";


const Poster = ({imagePath, title, id}) => {
    return (
      <div className="poster">
        <img className="poster-image" src={imagePath} alt={`movie poster for ${title}`}/>
        <h3>{title}</h3>
      </div>
    )
}







export default Poster;
