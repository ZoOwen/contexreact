import React, { Component } from "react";
import { MoviesContext } from "../Context/MoviesContext";
class Todos extends Component {
  render() {
    const Movies = this.context;

    return (
      <div>
        <h1>Class Base</h1>
        {Movies.movies.map((item, index) => (
          <div key={index}>
            <li>Name : {item.name}</li>

            <li>Year :{item.year}</li>
          </div>
        ))}
      </div>
    );
  }
}
Todos.contextType = MoviesContext;
export default Todos;
