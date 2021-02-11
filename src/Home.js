import React, { useState } from 'react';
import {
	Card,
	Button,
	Container,
	Col,
	Row,
	Image,
	Link,
	Jumbotron,
} from 'react-bootstrap';
import CarouselHome from './CarouselHome';
import BadgeModal from './BadgeModal';
import Axios from 'axios';
import headerImg from './images/max-header.png';

const Home = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const url = `https://blooming-earth-00957.herokuapp.com/songs/9`;

	return (
		// <Container fluid='md'>
		<div className='site-wrapper'>
			<div className='jumbo-wrapper'>
				<Jumbotron className='header' class='container'>
					<h4 className='header-title'>Hi, I'm Max the mask!</h4>
					<p className='header-p'>
						We’ve worked hard to stop COVID-19 in it’s tracks, let’s keep up the
						good work!
					</p>
					{/* <Image className='header-image' src={headerImg} /> */}
				</Jumbotron>
			</div>
			<div className='talk-wrapper'>
				<Card className='talk-card'>
					<Card.Title className='cdc-click'>
						Let’s talk covid vaccines
					</Card.Title>
					<Card.Text className='header-p'>
						How to have productive conversation about COVID-19 Vaccines
					</Card.Text>
				</Card>
			</div>
			<div className='card-wrapper'>
				<CarouselHome />
			</div>

			<div className='badge-wrapper'>
				<Card className='text-center' >
					<Card.Title className='cdc-click'>Grab your Badge 1 Card</Card.Title>
					<Button className='badge-btn' onClick={handleShow}>
						START NOW
					</Button>
				</Card>
			</div>
			<Row className='cdc-wrapper'>
				<a
					target='_blank'
					href='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html'>
					<Button className='cdc-card'>
						<hr></hr>
						<h4 className='cdc-click'>CLICK HERE</h4>{' '}
						<p className='cdc-p'>
							To find out more from the CDC about COVID-19 vaccinations and when
							you can get it in your state
						</p>
						<hr></hr>
					</Button>
				</a>
			</Row>
			<BadgeModal show={show} handleClose={handleClose} />
		</div>
	);
};

export default Home;
