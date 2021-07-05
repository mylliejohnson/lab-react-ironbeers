import React from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import Header from './components/Header';
import Home from './components/Home';
import OneBeer from './components/OneBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

// https://ih-beers-api2.herokuapp.com/beers

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/beers" render={(props) => <AllBeers />} />
        <Route
          exact
          path="/one-beer/:id"
          render={(props) => <OneBeer {...props} />}
        />
        <Route
          exact
          path="/random-beer"
          render={(props) => <RandomBeer {...props} />}
        />
        <Route
          exact
          path="/new-beer"
          render={(props) => <NewBeer {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
