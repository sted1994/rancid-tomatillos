import React, { Component } from "react"
import Nav from "./Nav"
import "./css/App.css"


class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <div>
        < Nav />
        <p>HELLO </p>
      </div>
    )
  }
}



export default App;
