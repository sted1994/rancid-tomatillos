
import React from 'react'
import './css/carousel.css'
import './css/carousel-card.css'
import CarouselCard from './Carousel-Card'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel';

const FeatureCarousel = ({movies, showMovieSummary}) => {
  const featureMovies = movies.filter(movie => movie.average_rating >= 6.5);
  const featureCards = featureMovies.map(movie => {
    return < CarouselCard showMovieSummary={showMovieSummary} movieProp={movie}  id={movie.id} key={movie.id}/>
  })

  return (
    <div className="carousel">
    <h2 className="top-rated">Top Rated</h2>
    <Carousel className="carousel-display"  autoPlay={true} infiniteLoop showStatus={false} showThumbs={false} width={'80%'} showArrows={true}>
    {featureCards}
    </Carousel>
    </div>
  )
}

export default FeatureCarousel
