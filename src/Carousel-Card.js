import React from 'react';
import './css/carousel-card.css';

const CarouselCard = ({movieProp, showMovieSummary, id}) => {

    return (
        <img id={id} onClick={(event) => showMovieSummary(event)} className="carousel-card-img" src={movieProp.poster_path}/>
    )


}

export default CarouselCard
