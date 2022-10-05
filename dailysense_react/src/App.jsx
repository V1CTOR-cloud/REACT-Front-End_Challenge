import './App.css';
import PageLanding from './Screens/PageLanding/PageLanding';
import { PageSignUp } from './Screens/PageSignUp/PageSignUp';
import { PageSignIn } from './Screens/PageSignIn/PageSignIn';
import { PageInfo } from './Screens/PageInfo/PageInfo';
import { useQuery, gql } from '@apollo/client';

export default function App() {
  return (
    <div className="App">
      <PageLanding ShowContent={true} LandingHeight={120} LandingWidth={100} backgroundColor='#FFF' />
      <PageInfo backgroundColor='#FFF' InfogHeight={120} InfoWidth={100} />
    </div>
  );
}


