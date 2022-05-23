import React, { Component } from 'react';
import './css/movie-summary.css';
import Trailer from './Trailer';
import NumberFormat from 'react-number-format';
import {apiCalls} from "./Api-calls";
import Error from './Error';
let daysjs = require('dayjs')

class MovieSummary extends Component {
	constructor(props) {
		super(props)
		this.state = {
		movieData: {},
		videos: '',
		errors: ''
		};
	};

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
		}));
	};

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
				{this.state.videos && this.renderTrailers() }
				<div className='about'>
					<h1 className='movie-title'>{this.state.movieData.title}</h1>
					{(this.state.movieData.tagline) && <p className='tagline'>{this.state.movieData.tagline}</p>}
					{(this.state.movieData.release_date) ? <p className='release-date'> <span className='release-date-title'>
						Release Date
					</span> {`${daysjs(this.state.movieData.release_date).format('MM-DD-YYYY')}` } </p> : 'N/A'}   
					<p className='overview'>{this.state.movieData.overview}</p>
				</div>
				<ul className='statistics'>
					<li> Average Rating {'  '}
					{(this.state.movieData.average_rating) ? 
						<NumberFormat
							value={this.state.movieData.average_rating.toFixed(1)}
							className='budget'
							displayType={'text'}
							thousandSeparator={true}
					/> : 'N/A'}
					</li>
						{'|'}
					<li> Budget {'  '}
					{(this.state.movieData.budget) ? 
						<NumberFormat
							value={this.state.movieData.budget}
							className='budget'
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
						/> : 'N/A'}
					</li>
						{'|'}
					<li> Revenue {'  '}
					{ (this.state.movieData.revenue) ? 
						<NumberFormat
							value={this.state.movieData.revenue}
							className='revenue'
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
						/> : 'N/A'}
					</li>
						{'|'}
					<li> Run Time {'  '}
					{(this.state.movieData.runtime) ? 	
						<NumberFormat
							value={this.state.movieData.runtime}
							className='runtime'
							displayType={'text'}
							thousandSeparator={true}
							suffix={' min'}
						/> : 'N/A' } 
					</li> 
				</ul>
			</div>
		</div >
		);
	};

  render () {
		return (
			<>
				{(this.state.errors) ? < Error /> : this.renderMovieSummary() }
			</>
		);
	};
};


export default MovieSummary;
