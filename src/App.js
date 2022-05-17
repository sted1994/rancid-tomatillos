import React, { Component } from "react";
import Nav from "./Nav";
import Error from './Error'
import "./css/app.css";
import MovieSummary from './Movie-Summary'
import HomePage from './HomePage'
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      movie: {
        movieData: '',
        videos: ''
      },
      errors: '',
    }
  }

  showMovieSummary = (event) => {
    Promise.all([
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.target.id}`).then(res => res.json()),
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.target.id}/videos`).then(res => res.json())
    ]).then((data) => {
        return this.setState({
          movie: {
            movieData: data[0].movie,
            videos: data[1].videos
          }
        })
    })
    .catch(err =>
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
        < Nav returnHome={this.returnHome} />
        <Switch>
          < Route path="/error" component={ Error } />
          < Route path={`/${this.state.movie.movieData.id}`} render={() => < MovieSummary movie={this.state.movie}/>} />
          < Route exact path="/" render={()=> < HomePage moviesProp={this.state.movies} showMovieSummary={this.showMovieSummary}/>} />
        </Switch>
      </main>
    )
  }
}

export default App;
