import React from 'react';
import Card from 'react-bootstrap/Card'
import CarouselHome from './CarouselHome'


const Home = () => {
    return (
			<>
				<Card>
					<Card.Title>Grab your Badge 1 Card</Card.Title>
				</Card>
				<CarouselHome />
				<Card>
					<Card.Title>Grab your Badge 1 Card again</Card.Title>
                    
				</Card>
				<Card>
					<Card.Title>Link to CDC </Card.Title>
				</Card>
			</>
		)
};

export default Home;