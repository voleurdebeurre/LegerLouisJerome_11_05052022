import '../../assets/css/logementMeta.css';

import Rating from './Rating.js';


function LogementMeta(data) {
    let logementRating = data.rating
    let logementHostName = data.host.name
    let logementHostPicture = data.host.picture
    
    return(
        <div className='logementMeta'>
            <div className='logementHost'>
                <p>{logementHostName}</p>
                <img src={logementHostPicture} alt={logementHostName} />
            </div>
            <Rating rating = {logementRating} />
        </div>
    )
}

export default LogementMeta;