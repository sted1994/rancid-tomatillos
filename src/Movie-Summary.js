import React, { Component } from 'react'
import './css/movie-summary.css';
import Trailer from './Trailer';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import {apiCalls} from "./Api-calls"
import Error from './Error'

class MovieSummary extends Component {
	constructor(props) {
		super(props)
		this.state = {
		movieData: '',
		videos: '',
		errors: ''
		}
	}

	componentDidMount = () => {
		Promise.all([
			apiCalls.getSingleMovie(this.props.id),
			apiCalls.getMovieTrailers(this.props.id)
		]).then((data) => {
				return this.setState({
					movieData: data[0].movie,
					videos: data[1].videos
				})
		})
		.catch(err =>
			this.setState({
			errors: 'Sorry, we are having some problems!'
		}))
	}

	renderTrailers = () => {
		return (
			<div className='trailers'>
				<Trailer trailers={this.state.videos} />
			</div>
		)
	}

	renderMovieSummary = () => {
		return (
			<div className='movie' style={{
				backgroundImage: `url(${this.state.movieData.backdrop_path})`
				}}>

			<div id={this.state.movieData.id}	className="movie-summary grid-col-span-1"  >
				{(this.state.videos) ? this.renderTrailers() : ''}
				<div className='about'>
					<h1 className='movie-title'>{this.state.movieData.title}</h1>
					<p className='tagline'>{this.state.movieData.tagline}</p>
					<p className='release-date'>{this.state.movieData.release_date}</p>
					<p className='overview'>{this.state.movieData.overview}</p>
				</div>
				<ul className='statistics'>
					<li> Average Rating {'  '}
						<NumberFormat
							value={this.state.movieData.average_rating}
							className='budget'
							displayType={'text'}
							thousandSeparator={true}
					/>
					</li>
					{'|'}
					<li> Budget {'  '}
						<NumberFormat
							value={this.state.movieData.budget}
							className='budget'
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
						/>
					</li>
					{'|'}
					<li> Revenue {'  '}
						<NumberFormat
							value={this.state.movieData.revenue}
							className='revenue'
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
						/>
					</li>
					{'|'}
					<li> Run Time {'  '}
						<NumberFormat
							value={this.state.movieData.runtime}
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

  render () {
		return (
		<>
			{(this.state.errors) ? < Error /> : this.renderMovieSummary() }
		</>
		)
	}
}


export default MovieSummary;
