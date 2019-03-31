import React, { Component } from 'react';
import './contact-info.css'

class ContactInfo extends Component {
	render() {
		return(
			<div>
				<div class="title">Contact info</div>
					<span class="info">E-mail:</span><span class="value">daniel.okawa@gmail.com</span>
				<div>
				</div>
				<div>
					<span class="info">Cellphone:</span><span class="value">(11) 97487-1303</span>
				</div>
			</div>
		)
	}
}

export default ContactInfo;