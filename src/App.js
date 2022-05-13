import React, { Component } from "react";
import Nav from "./Nav";
import Error from './Error'
import PosterContainer from "./Poster-Container";
import "./css/app.css";
import MovieSummary from './Movie-Summary'

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      movieSummary: false,
      movieToView: '',
      errors: '',
    }
  }

  showMovieSummary = (event) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.target.id}`)
    .then(res => res.json())
    .then(data => this.setState({
      movieSummary: true,
      movieToView: data.movie,
    }))
    .catch(err => console.log(err))
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
        {(this.state.errors) ? < Error /> : (this.state.movieSummary) ? < MovieSummary movieToView={this.state.movieToView}/> : < PosterContainer movies={this.state.movies} showMovieSummary={this.showMovieSummary}/>}
      </main>
    )
  }
}



export default App;
