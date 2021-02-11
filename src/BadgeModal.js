import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import BootstrapModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalCarousel from './ModalCarousel';

function BadgeModal({ show, handleClose }) {
	return (
		<BootstrapModal show={show} onHide={handleClose}>
			<BootstrapModal.Header closeButton className='badge-modal-header'>
				<BootstrapModal.Title className='modal-title'>
					Badges
				</BootstrapModal.Title>
			</BootstrapModal.Header>
			<BootstrapModal.Body className='badge-modal'>
				<ModalCarousel />
			</BootstrapModal.Body>
			<BootstrapModal.Footer className='modal-footer' >
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
