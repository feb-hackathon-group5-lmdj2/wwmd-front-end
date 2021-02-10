import React, { useState } from 'react';
import {
	Card,
	Button,
	Container,
	Col,
	Row,
	Image,
	Jumbotron,
} from 'react-bootstrap';
import CarouselHome from './CarouselHome';
import BadgeModal from './BadgeModal';

const Home = () => {
  	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container fluid='md'>
			<Row>
				<Col md={{ span: 3, offset: 3 }}>
					<Jumbotron className='header'>
						<h4 className='header-title'>Hi, I'm Max the mask!</h4>
						<p className='header-p'>
							We’ve worked hard to stop COVID-19 in it’s tracks, let’s keep up
							the good work!
						</p>
						<Image src='./images/max-header.png' fluid />
					</Jumbotron>
				</Col>
			</Row>
			<Row>
				<Col>
					<CarouselHome />
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 3 }}>
					<Card className='badge-card'>
						<Card.Title>Grab your Badge 1 Card</Card.Title>
						<Button className='badge-btn' onClick={handleShow}>START NOW</Button>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 3 }}>
					<Button className='cdc-card'>
						<h4 className='cdc-click'>CLICK HERE</h4>{' '}
						<p className='cdc-p'>
							To find out more from the CDC about COVID-19 vaccinations and when
							you can get it in your state
						</p>
					</Button>
				</Col>
			</Row>
    <BadgeModal show={show} handleClose={handleClose} />
		</Container>
	);
};

export default Home;
