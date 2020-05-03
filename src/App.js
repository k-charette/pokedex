import React from 'react'
import './styles/app.css'
import { GlobalStyle } from './global-styles'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import PokemonsContainer from './containers/PokemonsContainer'
import PokemonInfoContainer from './containers/PokemonInfoContainer'

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Switch>
        <Route exact path='/' component={PokemonsContainer}/>
        <Route path='/info/:name' component={PokemonInfoContainer}/>
      </Switch>
    </>
  );
}

export default App;
