import React from 'react';
import './css/movie-summary.css';
import Trailer from './Trailer';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';


const MovieSummary = ({movie}) => {
  return (
		<div className='movie'>
			<div id={movie.movieData.id}	className="movie-summary grid-col-span-1" style={{
				backgroundImage: `url(${movie.movieData.backdrop_path})`
				}} >
				<div className='trailers'>
					<Trailer trailers={movie.videos} />
				</div>
				<div className='about'>
					<h1 className='movie-title'>{movie.movieData.title}</h1>
					<p className='overview'>{movie.movieData.overview}</p>
					<p className='release-date'>{movie.movieData.release_date}</p>
					<p>{movie.movieData.average_rating}</p>
					<p>{movie.movieData.tagline}</p>
				</div>
				<ul> Statistics: 
					<li>{movie.movieData.budget}</li>
					<li>{movie.movieData.revenue}</li>
					<li>Run Time: {movie.movieData.runtime}</li>
				</ul>
			</div>
		</div >
  )
}


export default MovieSummary;
