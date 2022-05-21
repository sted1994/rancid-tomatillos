import React from "react";
import Poster from "./Poster";
import "./css/poster-container.css";

const PosterContainer = ({movies}) => {
  const posterCards = movies.map(movie => {
    return (
      <Poster
        imagePath={movie.poster_path}
        backdropPath={movie.backdrop_path}
        title={movie.title}
        rating={Math.round(movie.average_rating)}
        id={movie.id}
        key={movie.id}
      />
    );
  });

  return (
    <>
      <h2 class="browse-movies">Browse Other Ratings</h2>
      <hr class="browse-movies_hr"/>
      <section className="poster-container">
        {posterCards}
      </section>
    </>
  );
};

export default PosterContainer;
