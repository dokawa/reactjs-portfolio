import React, { Component } from 'react';
import './contact-info.css'
import Linkedin from '../assets/images/linkedin.png';

class ContactInfo extends Component {
	render() {
		return(
			<div>
				<div class="title">CONTATO</div>
				<div class="container">
					<div>
						<p class="info">E-mail:</p>
						<p class="info">Cel:</p>
					</div>
					<div>
						<p class="value">daniel.okawa@gmail.com</p>
						<p class="value">(11) 97487-1303</p>
					</div>
					<div><a href="https://br.linkedin.com/in/daniel-okawa-4211b3141/%7Bcountry%3Dbr%2C+language%3Dpt%7D?trk=people-guest_profile-result-card_result-card_full-click"><img class="contact-info-icon"src= { Linkedin }/></a></div>
				</div>
			</div>
		)
	}
}

export default ContactInfo;