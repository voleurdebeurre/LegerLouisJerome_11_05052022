import Header from '../components/Header.js'
import Splash from '../components/Splash.js';
import Card from '../components/Card.js';
import Footer from '../components/Footer.js';

import { logements } from "../assets/db/logements.js";

function App() {
  return (
    <div>
      <Header />
      <Splash />
      <div className="indexContents">
          {logements.map((logement) => {
              return (
                <Card title={logement.title} id={logement.id} src={logement.pictures[0]} />
              );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;