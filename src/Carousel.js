import React from 'react'
import './css/carousel.css'
import './css/carousel-card.css'
import CarouselCard from './Carousel-Card'

const FeatureCarousel = ({movies, showMovieSummary}) => {
  const featureMovies = movies.filter(movie => movie.average_rating >= 6.5);

  const featureCards = featureMovies.map(movie => {
    return < CarouselCard showMovieSummary={showMovieSummary} movieProp={movie}  id={movie.id} key={movie.id}/>
  })

  return (
    <div className="carousel-display">
      <h2 className='top-rated'>TOP RATED</h2>
      <div className="carousel">
        {featureCards}
      </div>
    </div>
  )
}

export default FeatureCarousel
