import '../../assets/css/logementMeta.css';
import RedStar from '../../assets/images/red-star.svg';
import GreyStar from '../../assets/images/grey-star.svg';

function Rating(dataTags) {
    let logementRating = dataTags.rating;
    let logementNegRating = 5 - logementRating
    const greyStars = () => {
        let greyStarsArray = []
        for( let i = 0; i < logementNegRating; i++){
            greyStarsArray.push(<img src={GreyStar} key={`Étoile grisée n°${i}`} alt={`Rating is ${logementRating}/5`}/>)
        }
        return greyStarsArray;
    }
    const redStars = () => {
        let redStarsArray = []
        for( let j = 0; j < logementRating ; j++){
            redStarsArray.push(<img src={RedStar} key={`Étoile rouge n°${j}`} alt={`Rating is ${logementRating}/5`}/>)
        }
        return redStarsArray;
    }
    
    return(
        <div className='logementRating'>
            {redStars()}
            {greyStars()}
        </div>
    )
}

export default Rating;