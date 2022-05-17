import React, { Component } from "react";
import Nav from "./Nav";
import Error from './Error'
import PosterContainer from "./Poster-Container";
import "./css/app.css";
import MovieSummary from './Movie-Summary'
import FeatureCarousel from './Carousel'
import HomePage from './HomePage'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      movieSummary: false,
      movie: {
        movieData: '',
        videos: ''
      },
      errors: '',
    }
  }

  showMovieSummary = (event) => {
    console.log(event.target)
    Promise.all([
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.target.id}`).then(res => res.json()),
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.target.id}/videos`).then(res => res.json())
    ]).then((data) => {
        return this.setState({
          movieSummary: true,
          movie: {
            movieData: data[0].movie,
            videos: data[1].videos
          }
        })
    }).catch(err =>
      this.setState({
      errors: 'Sorry, we are having some problems!'
    }))
  }

  returnHome = () => {
    this.setState({movieSummary: false, movieToView: ''})
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
    .then(data => this.setState({
      movies: data.movies,
      errors: ''
    }))
    .catch(err =>
      this.setState({
      errors: 'Sorry, we are having some problems!'
    }))
  }

  render() {
    return (
      <main>
        < Nav returnHome={this.returnHome}/>
        <Switch>
        {(this.state.errors) ? < Route path="/error" component={ Error}/>
        : (this.state.movieSummary) ? < Route path="/${this.state.movie.movieData.id}"
        render={() => < MovieSummary movie={this.state.movie}/>} />
        : < Route exact path="/" render={()=> < HomePage moviesProp={this.state.movies} showMovieSummary={this.showMovieSummary}/>} />}
      </Switch>
      </main>

    )
  }
}



export default App;
