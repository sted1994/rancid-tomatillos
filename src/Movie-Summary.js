import React from 'react';
import './css/movie-summary.css'

const MovieSummary = ({movie}) => {
  return (
		<React.Fragment>
			<div className='video'>
				<iframe
					src={`https://www.${movie.video.site}.com/embed/${movie.video.key}`}
					frameBorder='0'
					allow='autoplay'
					allowFullScreen
					title={movie.movieData.title}
				/>
			</div>
			<div id={movie.movieData.id}	className="movie-summary" style={{
				backgroundImage: `url(${movie.movieData.backdrop_path})`
				}} >
				<h2 className='movie-title'>{movie.movieData.title}</h2>
				<p className='overview'>{movie.movieData.overview}</p>
				<p className='release-date'>{movie.movieData.release_date}</p>
				<p>{movie.movieData.average_rating}</p>
				<ul>
					<li>{movie.movieData.genre}</li>
					<li>{movie.movieData.budget}</li>
					<li>{movie.movieData.revenue}</li>
					<li>{movie.movieData.tagline}</li>
					<li>{movie.movieData.runtime}</li>
				</ul>
			</div>
		</React.Fragment>
  )
}


export default MovieSummary;
