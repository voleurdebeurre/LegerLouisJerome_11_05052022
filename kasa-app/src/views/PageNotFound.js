import '../assets/css/pageNotFound.css';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';
import {Link} from "react-router-dom";

function PageNotFound() {

    return (
        <>
            <Header />
            <div className='pageNotFound'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">
                    Retourner sur la page d'accueil
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default PageNotFound;