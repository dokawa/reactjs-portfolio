import React, { Component } from 'react';
import './contact-info.css'

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
				</div>
			</div>
		)
	}
}

export default ContactInfo;