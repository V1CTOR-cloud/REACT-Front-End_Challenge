import './App.css';
import PageLanding from './Screens/PageLanding/PageLanding';
import { PageSignUp } from './Screens/PageSignUp/PageSignUp';
import { PageSignIn } from './Screens/PageSignIn/PageSignIn';
import { useQuery, gql } from '@apollo/client';

export default function App() {
  return (
    <div className="App">
      {/* <PageLanding ShowContent={true} LandingHeight={100} LandingWidth={100} backgroundColor='#FFF' /> */}
      {/* <PageSignUp /> */}
      <PageSignIn  />
    </div>
  );
}


