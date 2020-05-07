import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import MyNav from "./components/Nav";
import Login from "./views/Login";

const About = () => <h1 className="title is-1">About Page</h1>
const Game = () => <h1 className="title is-1">Game</h1>
const Home = () => <h1 className="title is-1">Home Page</h1>
const NotFound = () => <h1 className="title is-1">404 - Sorry, that page doesn't exist</h1>

function App() {
  return (
    <Router>
      <div className="App">
        <MyNav/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
