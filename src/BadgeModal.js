import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';

function BadgeModal(props) {
	return (
		<div>
			<FacebookShareButton
				url={'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html'}
				quote={'I got the COVID vaccine!'}
				hashtag='#covid19'
				className={FacebookShareButton}>
				<FacebookIcon size={36} />
			</FacebookShareButton>
			<TwitterShareButton
				url={'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html'}
				title={'I got the COVID vaccine!'}
				hashtags='#covid19'
				className={TwitterShareButton}>
				<TwitterIcon size={36} />
			</TwitterShareButton>
		</div>
	);
}

export default BadgeModal;
