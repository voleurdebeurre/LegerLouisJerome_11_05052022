import '../assets/css/splash.css';
import SplashIndex from '../assets/images/splashIndex.jpg';

function Splash() {
  return (
    <div className="splashImageContainer">
        <h2>Chez vous, partout et ailleurs</h2>
        <img src={SplashIndex} alt="Paysage de montagne et de mer" />
    </div>
  );
}

export default Splash;