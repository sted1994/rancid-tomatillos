import React from 'react';
import './css/error.css';

const Error = () => {
	return(
		<div className='errors' >
			<img src={require('./images/computer.png')} className='sadComputer' />
			<p>We are sorry, but we could not process your request!<br/>
			Please try refreshing the page.</p>	
		</div>
	);
};

export default Error; 