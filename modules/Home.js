import React from 'react'
import PropTypes from 'prop-types'
import { Glyphicon, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share'
const {FacebookShareButton, GooglePlusShareButton,LinkedinShareButton,TwitterShareButton,TelegramShareButton,WhatsappShareButton,PinterestShareButton,VKShareButton,OKShareButton} = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');
const FacebookIcon = generateShareIcon('facebook');
const LinkedinIcon = generateShareIcon('linkedin');

class Home extends React.Component{
constructor(props){
			super()
			this.state = {
			index: 0,
            direction: null   
	        }       
	    }


  handleSelect(selectedIndex, e) {

    this.setState({
      index: selectedIndex,
      direction: e.direction
    })
  }

	render() {
		const shareUrl = 'http://www.barcelonacodeschool.com';
		const title = 'Barcelona Code School';
		return (
			<div className="content">
			<div>
		<Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
		<Carousel.Item>
		  <img width={960} height={480} alt="960x480" src='/img/Build-online-store-from-zero-with-woocommerce.jpg'/>
		  <Carousel.Caption>
{/*		    <h3>First slide label</h3>
		    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img width={960} height={480} alt="960x480" src="/img/introduction_to_web_design.png"/>
		  <Carousel.Caption>
{/*		    <h3>Second slide label</h3>
		    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img width={960} height={480} alt="960x480" src="/img/create_a_wordpress_website_from_zero.jpg"/>
		  <Carousel.Caption>
{/*		    <h3>Third slide label</h3>
		    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
		  </Carousel.Caption>
		</Carousel.Item>
		</Carousel>
		</div>

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
}

export default Home