import React from 'react';
import './css/carousel-card.css';

const CarouselCard = ({movieProp, showMovieSummary, id}) => {

    return (
      <div className="slide" id={id} onClick={(event) => showMovieSummary(event)}>
        <img  className="carousel-card-img" src={movieProp.poster_path}/>
        <p className="legend">{movieProp.title}</p>
      </div>
    )
}

export default CarouselCard
