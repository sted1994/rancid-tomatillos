import React, { Component } from "react";
import Nav from "./Nav";
import PosterContainer from "./Poster-Container";
import movieData from "./sampleData/sample-movie-data.js";
import "./css/App.css";


class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    this.setState({movies: movieData.movies})
  }

  render() {
    return (
      <div>
        < Nav />
        < PosterContainer movies={this.state.movies} />
      </div>
    )
  }
}



export default App;
