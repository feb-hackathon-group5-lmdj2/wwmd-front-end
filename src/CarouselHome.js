import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import card1 from './images/Card1.png';
import card2 from './images/Card2.png';
import card3 from './images/Card3.png';
import card4 from './images/Card4.png';
import card5 from './images/Card5.png';
import card6 from './images/Card6.png';

const CarouselHome = () => {
	return (
		<Carousel className='carousel' style={{ minHeight: '40vh' }}>
			<Carousel.Item style={{ minHeight: '5vh' }}>
				<img className='d-block w-100' src={card1} alt='First slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={card2} alt='Second slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={card3} alt='Third slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={card4} alt='Fourth slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={card5} alt='Fifth slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={card6} alt='Sixth slide' />
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselHome;
