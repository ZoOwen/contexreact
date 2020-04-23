import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MoviesContext = createContext();
function MoviesContextProvider(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => setData(res.data));
  }, []);
  const [movies, setMovies] = useState([
    {
      name: "Back to the future",
      year: 2000,
    },
    {
      name: "Joker",
      year: 2019,
    },
    {
      name: "Spiderman",
      year: 2003,
    },
  ]);

  return (
    <MoviesContext.Provider value={{ movies, data }}>
      {props.children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
