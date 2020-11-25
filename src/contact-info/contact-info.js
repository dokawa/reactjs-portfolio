import React, { Component } from 'react';
import './contact-info.css'
import Linkedin from '../assets/images/linkedin.png';
import GMail from '../assets//images/gmail.png';

class ContactInfo extends Component {
	render() {
		return(
			<div>
				<div class="title">CONTACT</div>
				<div class="container">
					<div class="social-media"><a href="https://br.linkedin.com/in/daniel-okawa-4211b3141/%7Bcountry%3Dbr%2C+language%3Dpt%7D?trk=people-guest_profile-result-card_result-card_full-click"><img class="contact-info-icon"src= { Linkedin } alt="Linkedin icon"/></a></div>
					<div class="social-media"><a href="mailto:daniel.okawa@gmail.com?subject=Contact%20e-mail"><img class="contact-info-icon"src= { GMail } alt="Gmail icon"/></a></div>
				</div>
			</div>
		)
	}
}

export default ContactInfo;