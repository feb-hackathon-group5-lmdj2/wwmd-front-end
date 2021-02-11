import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import {
// 	FacebookShareButton,
// 	FacebookIcon,
// 	TwitterShareButton,
// 	TwitterIcon,
// } from 'react-share';
import BootstrapModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Image, Container, Row, Col } from 'react-bootstrap';
import ModalCarousel from './ModalCarousel';
import fingerpoint from './images/fingerpoint.png';

function BadgeModal({ show, handleClose }) {
	return (
		<BootstrapModal show={show} onHide={handleClose}>
			<Container className='badge-modal-header'>
				<BootstrapModal.Header className='badge-modal-header'>
					<Row>
						<BootstrapModal.Title className='modal-title'>
							Grab your badge!
							<br />
							<p>
								Select an image and share with your friends where you're at in
								your vaccine journey.
							</p>
						</BootstrapModal.Title>
					</Row>
					<Row>
						<Image
							fluid
							className=''
							src={fingerpoint}
							alt='finger point max'
						/>
					</Row>
				</BootstrapModal.Header>
			</Container>
			<BootstrapModal.Body className='badge-modal'>
				<ModalCarousel />
			</BootstrapModal.Body>
			<BootstrapModal.Footer className='modal-footer'>
				<Button
					variant='secondary'
					onClick={handleClose}
					className='badge-modal-btn'>
					Close
				</Button>
			</BootstrapModal.Footer>
		</BootstrapModal>

		// <div>
		// 	<FacebookShareButton
		// 		url={'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html'}
		// 		quote={'I got the COVID vaccine!'}
		// 		hashtag='#covid19'
		// 		className={FacebookShareButton}>
		// 		<FacebookIcon size={36} />
		// 	</FacebookShareButton>
		// 	<TwitterShareButton
		// 		url={'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html'}
		// 		title={'I got the COVID vaccine!'}
		// 		hashtags='#covid19'
		// 		className={TwitterShareButton}>
		// 		<TwitterIcon size={36} />
		// 	</TwitterShareButton>
		// </div>
	);
}

export default BadgeModal;
