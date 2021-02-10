import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import badge1 from './images/Badge1.png';
import badge2 from './images/Badge2.png';
import badge3 from './images/Badge3.png';
import badge4 from './images/Badge4.png';
import badge5 from './images/Badge5.png';
import Button from 'react-bootstrap/Button';

import { FacebookShareButton, FacebookIcon } from 'react-share';

function download(badge) {
	window.open(badge);
}

const ModalCarousel = () => {
	return (
		<Carousel className='modal-carousel' style={{ minHeight: '40vh' }}>
			<Carousel.Item style={{ minHeight: '5vh' }}>
				<img className='d-block w-100' src={badge1} alt='Badge 1' />
				<Carousel.Caption>
					<Button onClick={() => download(badge1)}>Download</Button>
					{/* <FacebookShareButton
						url={
							'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html'
						}
						quote={'I got the COVID vaccine!'}
						hashtag='#covid19'
						className={FacebookShareButton}>
						<FacebookIcon size={36} />
					</FacebookShareButton> */}
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={badge2} alt='Badge 2' />

				<Carousel.Caption>
					<Button onClick={() => download(badge2)}>Download</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={badge3} alt='Badge 3' />

				<Carousel.Caption>
					<Button onClick={() => download(badge3)}>Download</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={badge4} alt='Badge 4' />

				<Carousel.Caption>
					<Button onClick={() => download(badge4)}>Download</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={badge5} alt='Badge 5' />

				<Carousel.Caption>
					<Button onClick={() => download(badge5)}>Download</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default ModalCarousel;
