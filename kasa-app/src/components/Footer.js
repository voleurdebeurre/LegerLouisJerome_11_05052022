import '../assets/css/footer.css';

function Footer() {
  return (
    <div className='footerContainer'>
        <footer>
            <div className='footerLogoContainer'>
                <h4>
                    <span>K</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.04 53.36">
                        <path d="M46,19.83,24.13,7,12,0,0,20.94.18,40.58,21.92,53.36l2.21-1.29V33.54l9.76-17.23,9.94,5.74V40.58L46,39.28Z"/>
                        <path d="M33.11,34.14v12.6l5.34-3.15V31Z"/>
                    </svg>
                    <span>sa</span>
                </h4>
            </div>
            <h5>© 2020 Kasa. All rights reserved</h5>
        </footer>
    </div>
  );
}

export default Footer;