import '../assets/css/card.css';


function Card(data) {
    let {id , title, src} = data;

    return(
        <div className="cardContainer" key={id}>
            <h3>{title}</h3>
            <img src={src} alt={title} />
        </div>
    );

}

export default Card;