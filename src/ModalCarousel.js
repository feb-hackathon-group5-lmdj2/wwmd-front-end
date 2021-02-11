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
			<Carousel.Item style={{ minHeight: '5vh' }} className='carousel-item'>
				<img className='d-block w-100' src={badge1} alt='Badge 1' />
				<br />
				<br />
				<br />
				<br />

				<Carousel.Caption>
					{/* <Button onClick={() => download(badge1)} className='badge-btn'>
						Download
					</Button> */}
					<Button className='badge-btn'>
						<a href={badge1} download='Badge1.png' >
							Download
						</a>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={badge2} alt='Badge 2' />
				<br />
				<br />
				<br />
				<br />
				<Carousel.Caption>
					<Button onClick={() => download(badge2)} className='badge-btn'>
						Download
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={badge3} alt='Badge 3' />
				<br />
				<br />
				<br />
				<br />
				<Carousel.Caption>
					<Button onClick={() => download(badge3)} className='badge-btn'>
						Download
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={badge4} alt='Badge 4' />
				<br />
				<br />
				<br />
				<br />
				<Carousel.Caption>
					<Button onClick={() => download(badge4)} className='badge-btn'>
						Download
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={badge5} alt='Badge 5' />
				<br />
				<br />
				<br />
				<br />

				<Carousel.Caption>
					<Button onClick={() => download(badge5)} className='badge-btn'>
						Download
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
};

export default ModalCarousel;
