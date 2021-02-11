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
import hearts from './images/hearts.png';
import bandaidMask from './images/bandaidmask.png';
const Home = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const url = `https://blooming-earth-00957.herokuapp.com/songs/9`;

	return (
		<Container fluid='sm'>
			<Row>
				<Col xs={3} md={2}></Col>
				<Col xs={12} md={8}>
					<Card border='light' className='header' class='container'>
						<Row xs={3} xs={12}>
							<div>
								<h4 className='header-title'>Hi, I'm Max the mask!</h4>
								<p className='header-p'>
									We’ve worked hard to stop COVID-19 in it’s tracks, let’s keep
									up the good work!
								</p>
							</div>
							<Image
								fluid
								className='header-image'
								src={headerImg}
								alt='header max'
							/>
						</Row>
					</Card>
				</Col>
				<Col xs={3} md={2}></Col>
			</Row>
			<div className='talk-wrapper'>
				<Row>
					<Col xs={3} md={2}></Col>
					<Col xs={12} md={8}>
						<Card border='light' className='talk-card' className='text-left'>
							<Card.Title className='cdc-click'>
								Let’s talk Covid-19 vaccines
							</Card.Title>
							<Card.Text className='header-p'>
								How to have productive conversation about COVID-19 Vaccines
							</Card.Text>
						</Card>
					</Col>
					<Col xs={3} md={2}></Col>
				</Row>
			</div>
			<div className='card-wrapper'>
				<Row xs={12}>
					<div className='carousel'>
						<CarouselHome />
					</div>
				</Row>
			</div>

			<div>
				<Row>
					<Col xs={3} md={2}></Col>
					<Col xs={12} md={8}>
						<Card className='text-center'>
							<Card.Title className='cdc-click'>
								Download your Badge!
							</Card.Title>
							<Card.Body>
								<p>
									Share with your friends where you're at in your vaccine
									journey.
								</p>

								<Image
									fluid
									className='badge-image'
									src={hearts}
									alt='hearts'
								/>

								<Button className='badge-btn' onClick={handleShow}>
									START NOW
								</Button>

								<Image
									fluid
									className='badge-image'
									src={bandaidMask}
									alt='bandaid mask'
								/>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={3} md={2}></Col>
				</Row>
			</div>
			<Row>
				<Col xs={3} md={2}></Col>
				<Col xs={12} md={8}>
					<a
						target='_blank'
						href='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html'>
						<Button className='cdc-card'>
							<hr></hr>
							<h4 className='cdc-click'>CLICK HERE</h4>{' '}
							<p className='cdc-p'>
								To find out more from the CDC about COVID-19 vaccinations and
								when you can get it in your state
							</p>
							<hr></hr>
						</Button>
					</a>
				</Col>
				<Col xs={3} md={2}></Col>
			</Row>
			<BadgeModal show={show} handleClose={handleClose} />
		</Container>
	);
};

export default Home;
