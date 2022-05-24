import '../../assets/css/carousel.css';
import CarouselArrow from '../../assets/images/carousel-arrow.svg';
import React, { useState, useEffect } from 'react';


function Carousel(data) {
    let [slideIndex] = useState(1);
    useEffect(() => {
        showSlides(slideIndex);
    })

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function showSlides(n){
        let i;
        let slides = document.getElementsByClassName("carouselSlide");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    } 
    
    let logementPictures = data.pictures;
    let logementTitle = data.title;

    return(
        <>
            {logementPictures.map((picture) => {
                return(
                    <div className='carouselSlide fade' key={picture} >
                        <img src={picture} alt={logementTitle}/>
                    </div>
                )
            })}
            <button className="prevSlide" onClick={() => plusSlides(-1)}>
                <img src={CarouselArrow} alt="Précédent" />
            </button>
            <button className="nextSlide" onClick={() => plusSlides(1)}>
                <img src={CarouselArrow} alt="Suivante" />
            </button>
        </>
    );
}

export default Carousel;