import React from 'react'
import {
	ShareButtons,
	ShareCounts,
	generateShareIcon
} from 'react-share'
const {
	FacebookShareButton,
	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	PinterestShareButton,
	VKShareButton,
	OKShareButton
} = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');
const FacebookIcon = generateShareIcon('facebook');
const LinkedinIcon = generateShareIcon('linkedin');


export default React.createClass({
	render() {
		const shareUrl = 'http://www.google.com';
		const title = 'Built with react';
		return (
			<div>
			<h1>Home</h1>
				<div className="social_share_container">
					<TwitterShareButton
					url={shareUrl}
					title={title}
					className="social_share_buttons">
					<TwitterIcon
					size={26}
					round />
					</TwitterShareButton>
					<FacebookShareButton
					url={shareUrl}
					title={title}
					className="social_share_buttons">
					<FacebookIcon
					size={26}
					round />
					</FacebookShareButton>
					<LinkedinShareButton
					url={shareUrl}
					title={title}
					className="social_share_buttons">
					<LinkedinIcon
					size={26}
					round />
					</LinkedinShareButton>
				</div>
			</div>
			)
	}
})
