import React from 'react'
import './styles/app.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import PokemonsContainer from './containers/PokemonsContainer'

const App = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })
  return (
    <ApolloProvider client={client}>
      <div className='text-2xl text-pink-700'> 
        <PokemonsContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
