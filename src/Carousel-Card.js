import React from 'react';
import './css/carousel-card.css';
import { Link } from 'react-router-dom';

const CarouselCard = ({movieProp, id}) => {
  return (
    <Link to={`/${id}`}>
      <div className="slide" id={id} >
        <img alt={movieProp.title} className="carousel-card-img" src={movieProp.poster_path}/>
      </div>
    </Link>
  );
};

export default CarouselCard;
