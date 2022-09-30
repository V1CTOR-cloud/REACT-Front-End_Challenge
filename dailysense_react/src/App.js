import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery, gql } from "@apollo/client";

function App() {

  const FILMS_QUERY = gql`
  {
      dependentPeople {
        id
        name
      }
  }
`;

  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {data.name}
        </p>
      </header>
    </div>
  );
}

export default App;
