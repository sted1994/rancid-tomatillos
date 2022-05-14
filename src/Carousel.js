import React from 'react'
import './css/carousel.css'
import './css/carousel-card.css'
import CarouselCard from './Carousel-Card'

const FeatureCarousel = ({movies, showMovieSummary}) => {
  const featureMovies = movies.filter(movie => movie.average_rating >= 6.5);

  const featureCards = featureMovies.map(movie => {
    return < CarouselCard showMovieSummary={showMovieSummary} movieProp={movie}  id={movie.id} key={movie.id}/>
  })

console.log()
  return (
<div className="carousel-display">
<p>Top rated</p>
    <div className="carousel">

      {featureCards}
    </div>
    </div>
              )
}

export default FeatureCarousel
