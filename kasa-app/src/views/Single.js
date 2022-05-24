import Header from '../components/Header.js'
import Footer from '../components/Footer.js';
import Carousel from '../components/logement/Carousel.js';
import LogementHeader from '../components/logement/LogementHeader.js';
import LogementMeta from '../components/logement/LogementMeta.js';
import Accordion from '../components/Accordion.js';

import { Navigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { logements } from "../assets/db/logements.js";

function Single() {
    
    let selectedId = useParams();
    let logementTitle;
    let logementPictures;
    let logementDesc;
    let logementHost;
    let logementRating;
    let logementLocation;
    let logementEquipments;
    let logementTags;
    logements.forEach((logement) => {
        if(logement.id === selectedId.id){
            logementTitle = logement.title
            logementPictures = logement.pictures
            logementDesc = logement.description
            logementHost = logement.host
            logementRating = logement.rating
            logementLocation = logement.location
            logementEquipments = logement.equipments
            logementTags = logement.tags
        }
    })

    if(!logementTitle){
        return <Navigate to="/404" />;
    }

    return (
        <div className='contentWrapper'>
            <Header />
            <div className="singleCarousel">
                <Carousel title = {logementTitle} pictures = {logementPictures} />
            </div>
            <div className="logementTitle">
                <LogementHeader title = {logementTitle} location = {logementLocation} tags = {logementTags} />
                <LogementMeta  rating = {logementRating} host = {logementHost} />
            </div>
            <div className="logementInfos">
                <Accordion accordionContent = {logementDesc} accordionTitle = "Description" />
                <Accordion accordionContent = {logementEquipments} accordionTitle = "Équipements"/>
            </div>
            <Footer />
        </div>
        
    );
}

export default Single;