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
        <div className="poster-back">
          <img id={id} className="backdrop-image" src={backdropPath} alt={`alternative poster for ${title}`}/>
          <h1>{title}</h1>
          <h3>Average Rating:{rating}</h3>
        </div>
       </div>
      </div>
    )
}

// <div class="flip-card">
//   <div class="flip-card-inner">
//     <div class="flip-card-front">
//       <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
//     </div>
//     <div class="flip-card-back">
//       <h1>John Doe</h1>
//       <p>Architect & Engineer</p>
//       <p>We love that guy</p>
//     </div>
//   </div>
// </div>





export default Poster;
