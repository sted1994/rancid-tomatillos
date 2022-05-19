import React, { Component } from "react";
import Nav from "./Nav";
import Error from "./Error"
import "./css/app.css";
import MovieSummary from "./Movie-Summary"
import HomePage from "./HomePage"
import { Switch, Route, Redirect } from "react-router-dom";
import {apiCalls} from "./Api-calls"

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      errors: '',
    }
  }

  returnHome = () => {
    this.setState({movieSummary: false, movieToView: ''})
  }

  componentDidMount = () => {
    apiCalls.getMovies()
    .then(data => this.setState({
      movies: data.movies,
      errors: ''
      })
    )
    .catch(err =>
      this.setState({
      errors: 'Sorry, we are having some problems!'
      })
    )
  }

  render() {
    return (
      <main>
        < Nav returnHome={this.returnHome} />
        <Switch>
          < Route path="/error" component={ Error } />
          < Route exact path='/:id' render={({match}) => {
            return < MovieSummary id={match.params.id} /> }
          } />
          < Route exact path="/" render={()=> < HomePage moviesProp={this.state.movies} />} />
        </Switch>
      </main>
    )
  }
}

export default App;
