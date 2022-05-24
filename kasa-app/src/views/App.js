import Header from '../components/Header.js'
import Splash from '../components/Splash.js';
import Card from '../components/Card.js';
import Footer from '../components/Footer.js';

import SplashIndex from '../assets/images/splashIndex.jpg';
import { logements } from "../assets/db/logements.js";

function App() {
  return (
    <div className='contentWrapper'>
      <Header />
      <Splash image = {SplashIndex} title = "Chez vous, partout et ailleurs" />
      <div className="indexContents">
          {logements.map((logement) => {
              return (
                <Card title={logement.title} id={logement.id} src={logement.pictures[0]} key={logement.title} />
              );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;