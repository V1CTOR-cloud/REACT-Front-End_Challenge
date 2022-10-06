import './App.css';
import PageLanding from './Screens/PageLanding/PageLanding';
import { PageInfo } from './Screens/PageInfo/PageInfo';

export default function App() {
  return (
    <div className="App">
      <PageLanding ShowContent={true} LandingHeight={120} LandingWidth={100} backgroundColor='#FFF' />
      <PageInfo backgroundColor='#FFF' InfogHeight={120} InfoWidth={100} />
    </div>
  );
}


