// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom"
import Pokemon from '../Pokemon/Pokemon'
import Pokedex from '../Pokedex/Pokedex'

function App() {
  return (
    // <div className="App">
    <Switch>
      <Route exact path ="/" render={(props) => <Pokedex {...props} />}/>
      <Route path ="/:pokemonId" render={(props) => <Pokemon {...props} />}/>

    </Switch>
  );
}

export default App;
