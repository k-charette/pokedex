import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh'
})

ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </ApolloProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
