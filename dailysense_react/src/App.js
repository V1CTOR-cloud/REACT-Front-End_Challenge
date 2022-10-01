import './App.css';
import Landing from './Screens/Landing';
import { useQuery, gql } from '@apollo/client';

export default function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}


