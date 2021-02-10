import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CarouselHome from './CarouselHome';
import BadgeModal from './BadgeModal';
import Button from 'react-bootstrap/Button';

const Home = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Card>
			<Card>
				<Card.Title>Grab your Badge 1 Card</Card.Title>
				<Button variant='secondary' onClick={handleShow}>
					Open Modal
				</Button>
			</Card>
			<CarouselHome />
			<Card>
				<Card.Title>Grab your Badge 1 Card again</Card.Title>
				<Button variant='secondary' onClick={handleShow}>
					Open Modal
				</Button>
			</Card>
			<Card>
				<Card.Title>Link to CDC </Card.Title>
			</Card>
			<BadgeModal show={show} handleClose={handleClose} />
		</Card>
	);
};

export default Home;
