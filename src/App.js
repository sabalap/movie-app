import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Movie from "./SingleMovie";
export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies/:id" children={<Movie />} />
        </Switch>
      </div>
    </div>
  )
}