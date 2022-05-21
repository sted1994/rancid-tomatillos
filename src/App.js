import React, { Component } from "react";
import Nav from "./Nav";
import Error from "./Error"
import "./css/app.css";
import MovieSummary from "./Movie-Summary"
import HomePage from "./HomePage"
import { Switch, Route } from "react-router-dom";
import {apiCalls} from "./Api-calls"

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      errors: '',
    }
  }

  componentDidMount = () => {
    apiCalls.getMovies()
    .then(data => this.setState({
      movies: data.movies,
      errors: ''
      })
    )
    .catch(err =>{
      this.setState({
      errors: true
      })
    })
  }

  renderApplication = () => {
    return (
      <Switch>
        < Route exact path='/:id' render={({match}) => {
          return < MovieSummary id={match.params.id} /> }
        } />
        < Route exact path="/" render={()=> < HomePage moviesProp={this.state.movies} />} />
      </Switch>
    )
  }

  render() {
    return (
      <main>
        < Nav />
        {(this.state.errors) ? < Error /> : this.renderApplication()}
      </main>
    )
  }
}

export default App;
