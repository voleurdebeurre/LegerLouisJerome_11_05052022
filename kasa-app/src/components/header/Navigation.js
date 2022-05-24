import '../../assets/css/nav.css';
import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <div className='navContainer'>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>   
            </nav>
        </div>
    );
}

export default Navigation