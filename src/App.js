import React from 'react'
import './styles/app.css'
import { Switch, Route, Redirect } from 'react-router-dom'

import PokemonsContainer from './containers/PokemonsContainer'
import PokemonInfoContainer from './containers/PokemonInfoContainer'

const App = () => {
  return (
      <Switch>
        <Route exact path='/' component={PokemonsContainer}/>
        <Route path='/info' component={PokemonInfoContainer}/>
      </Switch>
  );
}

export default App;
