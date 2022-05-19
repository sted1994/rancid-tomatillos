import React from 'react';
import './css/trailer.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Trailer = ({trailers}) => {
	return (
		<Carousel ariaLabel='hello'  infiniteLoop autoFocus={true} autoPlay={true} className='trailers-carousel' showThumbs={false}>
			{trailers.map(trailer => (
				<div key={trailer.id}>
					<iframe
						className='trailer'
						src={`https://www.${trailer.site}.com/embed/${trailer.key}`}
						frameBorder='0'
						allow='fullscreen; autoplay'
					/>
				</div>
			))}
		</Carousel>
	)
}

export default Trailer;