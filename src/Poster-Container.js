import React from "react";
import Poster from "./Poster";
import "./css/poster-container.css";


const PosterContainer = ({movies}) => {
  const posterCards = movies.map(movie => {
    return (
      <Poster 
        imagePath={movie.poster_path}
        title={movie.title}
        id={movie.id}
        key={movie.id}
      />
    )
  })

    return (
      <section className="poster-container">
        {posterCards}
      </section>
  )
}


export default PosterContainer;
