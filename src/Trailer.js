import React from 'react';
import './css/trailer.css';

const Trailer = ({trailers}) => {
	const renderedTrailers = trailers.map(trailer => {
			return (
				<iframe
					className='trailer'
					key={trailer.id}
					src={`https://www.${trailer.site}.com/embed/${trailer.key}`}
					frameBorder='0'
					allow='fullscreen; autoplay'
				/>
			)
		})


	return (
		<div className='video'>
			{renderedTrailers}
		</div>
	)
}

export default Trailer;