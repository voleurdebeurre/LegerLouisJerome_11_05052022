import '../assets/css/card.css';
import { Link, Outlet } from "react-router-dom";


function Card(data) {
    let {id , title, src} = data;

    return(
        <>
        <div className="cardContainer" key={id}>
            <Link to={`logements/${id}`}>
                <h3>{title}</h3>
                <img src={src} alt={title} />
            </Link>
        </div>
        <Outlet />
        </>
    );

}

export default Card;