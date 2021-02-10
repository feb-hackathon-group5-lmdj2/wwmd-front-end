import React from 'react';
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
			<BootstrapModal.Header closeButton>
				<BootstrapModal.Title>Modal title</BootstrapModal.Title>
			</BootstrapModal.Header>
			<BootstrapModal.Body>
				Woohoo, you're reading this text in a modal!
				<ModalCarousel />
			</BootstrapModal.Body>
			<BootstrapModal.Footer>
				<Button variant='secondary' onClick={handleClose}>
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
