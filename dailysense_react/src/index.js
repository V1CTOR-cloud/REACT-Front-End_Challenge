import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cl8ndm5i20c2y01un1342bexj/master",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetDependentPerson{
        dependentPeople {
          id
          name
        }
      }
    `,
  })
  .then((result) => console.log(result.data.dependentPeople[0].name));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
