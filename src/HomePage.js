import React from 'react';
import PosterContainer from './Poster-Container';
import FeatureCarousel from './Carousel';
import './css/homePage.css';

const HomePage = ({moviesProp, showMovieSummary}) => {
  return (
    <div className="home-page">
      <FeatureCarousel movies={moviesProp} showMovieSummary={showMovieSummary}/>
      <PosterContainer movies={moviesProp} showMovieSummary={showMovieSummary}/>
    </div>
  );
};

export default HomePage;
