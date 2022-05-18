import React from 'react';
import './css/movie-summary.css';
import Trailer from './Trailer';
import NumberFormat from 'react-number-format';

const MovieSummary = ({movie}) => {
  return (
		<div className='movie' style={{
			backgroundImage: `url(${movie.movieData.backdrop_path})`
			}}>
			<div id={movie.movieData.id}	className="movie-summary grid-col-span-1"  >
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
				<ul className='statistics'>
					<li> Budget: {'  '}
						<NumberFormat
							value={movie.movieData.budget}
							className='budget'
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}						
						/>
					</li>
					<li> Revenue: {'  '}
						<NumberFormat
							value={movie.movieData.revenue}
							className='revenue'
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}						
						/>						
					</li>
					<li> Run Time: {'  '}
						<NumberFormat
							value={movie.movieData.runtime}
							className='runtime'
							displayType={'text'}
							thousandSeparator={true}	
							suffix={' min'}				
						/>
					</li>
				</ul>
			</div>
		</div >
  )
}


export default MovieSummary;
