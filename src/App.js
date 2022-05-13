import React, { Component } from "react";
import Nav from "./Nav";
import PosterContainer from "./Poster-Container";
import movieData from "./sampleData/sample-movie-data.js";
import "./css/App.css";
import MovieSummary from './Movie-Summary'

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      movieSummary: false,
      movieToView: '',
    }
  }

  showMovieSummary = (event) => {
    this.setState({
      movieToView: this.state.movies.find(film => film.id === parseInt(event.target.id)),
      movieSummary: true
    })


  }

  returnHome = () => {
    this.setState({movieSummary: false, movieToView: ''})
  }

  componentDidMount = () => {
    this.setState({movies: movieData.movies})
  }



  render() {
    return (
      <div>
        < Nav returnHome={this.returnHome}/>
        {(this.state.movieSummary) ? < MovieSummary movieToView={this.state.movieToView}/>: < PosterContainer movies={this.state.movies} showMovieSummary={this.showMovieSummary}/>}

      </div>
    )
  }
}



export default App;
