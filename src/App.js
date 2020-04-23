import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesContextProvider from "./Context/MoviesContext";

//components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

//PAGES
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Todos from "./pages/Todos";
function App() {
  return (
    <MoviesContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </MoviesContextProvider>
  );
}

export default App;
