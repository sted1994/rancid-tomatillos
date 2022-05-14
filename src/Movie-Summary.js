import React from 'react';
import './css/movie-summary.css'

const MovieSummary = (movieToView) => {
  return (
    <div className="movie-summary" style={{
			backgroundImage: `url(${movieToView.movieToView.backdrop_path})`
			}} >
      <h2>{movieToView.movieToView.title}</h2>
      <p>{movieToView.movieToView.overview}</p>
      <p>{movieToView.movieToView.releaseDate}</p>
      <p>{movieToView.movieToView.rating}</p>
      <p>{movieToView.movieToView.genre}</p>
      <p>{movieToView.movieToView.budget}</p>
      <p>{movieToView.movieToView.revenue}</p>
      <p>{movieToView.movieToView.tagline}</p>
      <p>{movieToView.movieToView.runtime}</p>
    </div>
  )
}


export default MovieSummary;
