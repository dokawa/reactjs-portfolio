import React, { Component } from 'react';
import picture from '../assets/images/picture.jpg';
import './header.css';
import Timeline from '../timeline/timeline';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div>
				<div class="header">
						<span class="nav-item"></span>
						<span class="nav-item"><Link to="/experience/" class="anchor">Experience</Link></span>
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
			</div>
		)
	}
}

export default Header;