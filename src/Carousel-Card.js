import React from 'react';
import './css/carousel-card.css';

const CarouselCard = ({movieProp, showMovieSummary, id}) => {

    return (
      <div className="slide" id={id} onClick={(event) => showMovieSummary(event)}>
        <img  className="carousel-card-img" src={movieProp.poster_path}/>
        <p id={id} style={{"fontSize": 30}} className="legend test">{movieProp.title}</p>
      </div>
    )
}

export default CarouselCard
