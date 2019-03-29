import React, { Component } from 'react';
import picture from '../assets/images/picture.jpg'
import './header.css'
import Timeline from '../timeline/timeline'

class Header extends Component {
	render() {
		return (
			<div class="header">
				<span class="nav-item"></span>
				<span class="nav-item">Experience</span>
				<span class="nav-item">Education</span>
				<span class="space"></span>
				<div class="imageholder">
					<img src= { picture } class='picture'/>
				</div>
				<span class="nav-empty"></span>
				<span class="nav-empty"></span>
				<span class="space"></span>
				<span class="nav-item">Personal Projects</span>
				<span class="nav-item">Knowledge and Skills</span>
				<span class="nav-item">Hobbies and Interests</span>
			</div>
		)
	}
}

export default Header;