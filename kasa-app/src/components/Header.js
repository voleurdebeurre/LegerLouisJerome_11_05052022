import '../assets/css/header.css';

import BrandLogo from './header/BrandLogo.js'
import Navigation from './header/Navigation.js'

function Header() {
  return (
    <div className='headerContainer'>
        <header>
            <BrandLogo />
            <Navigation />
        </header>
    </div>
  );
}

export default Header;