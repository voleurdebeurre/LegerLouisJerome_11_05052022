import Header from '../components/Header.js'
import Splash from '../components/Splash.js';
import Accordion from '../components/Accordion.js';
import Footer from '../components/Footer.js';
import splashAboutImage from '../assets/images/splashAbout.jpg';

function About() {
  return (
    <div className='contentWrapper'>
      <Header />
      <Splash image = {splashAboutImage} title = "" />
      <div className='splashAccordion'>
        <Accordion accordionContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." accordionTitle = "Fiabilité" />
        <Accordion accordionContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." accordionTitle = "Respect" />
        <Accordion accordionContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." accordionTitle = "Service" />
        <Accordion accordionContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." accordionTitle = "Securité" />
      </div>
      <Footer />
    </div>
  );
}

export default About;