import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { MoviesContext } from "../Context/MoviesContext";
function Movies(props) {
  const movies = useContext(MoviesContext);
  console.log(movies);

  return (
    <div>
      <h1>Movies</h1>
      {movies.movies.map((item, index) => (
        <div key={index}>
          <li>Name : {item.name}</li>

          <li>Year :{item.year}</li>
        </div>
      ))}
      <br />
      <h1>Todos</h1>
      {movies.data.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </div>
  );
}
export default Movies;
