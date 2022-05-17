import React from 'react';
import './css/carousel-card.css';
import { Link } from 'react-router-dom';

const CarouselCard = ({movieProp, showMovieSummary, id}) => {

    return (
      <Link to={`/${id}`}>
        <div className="slide" id={id} onClick={(event) => showMovieSummary(event)}>
          <img  className="carousel-card-img" src={movieProp.poster_path}/>
          <p className="legend">{movieProp.title}</p>
        </div>
      </Link>
    )
}

export default CarouselCard
