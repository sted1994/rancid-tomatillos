import React, { Component } from 'react'
import './css/movie-summary.css';
import Trailer from './Trailer';
import NumberFormat from 'react-number-format';

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
			fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`).then(res => res.json()),
			fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`).then(res => res.json())
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

  render () {
		return (
			<div className='movie'>
				<div id={this.state.movieData.id}	className="movie-summary grid-col-span-1" style={{
					backgroundImage: `url(${this.state.movieData.backdrop_path})`
					}} >
					{(this.state.videos) ? this.renderTrailers() : ''}
					<div className='about'>
						<h1 className='movie-title'>{this.state.movieData.title}</h1>
						<p className='overview'>{this.state.movieData.overview}</p>
						<p className='release-date'>{this.state.movieData.release_date}</p>
						<p>{this.state.movieData.average_rating}</p>
						<p>{this.state.movieData.tagline}</p>
					</div>
					<ul> Statistics:
						<li>{this.state.movieData.budget}</li>
						<li>{this.state.movieData.revenue}</li>
						<li>Run Time: {this.state.movieData.runtime}</li>
					</ul>
				</div>
			</div >
		)
	}
}

export default MovieSummary;
