import React from "react";
import Poster from "./Poster";
import "./css/poster-container.css";
import FeatureCarousel from './Carousel'

const PosterContainer = ({movies, showMovieSummary}) => {
  const posterCards = movies.map(movie => {
    return (
      <Poster
        imagePath={movie.poster_path}
        backdropPath={movie.backdrop_path}
        title={movie.title}
        rating={Math.round(movie.average_rating)}
        id={movie.id}
        key={movie.id}
        showMovieSummary={showMovieSummary}
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
