import React, { Component } from 'react';
import picture from '../assets/images/picture.jpg';
import './header.css';
import Timeline from '../timeline/timeline';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div class = "header">
				<div class="nav">
					<span class="nav-empty"></span>
					<span class="nav-item"><Link to="/experience/" class="anchor">Experience</Link></span>
					<span class="nav-item"><Link to="/education/" class="anchor">Education</Link></span>
					<div class="imageholder">
						<img src= { picture } class='picture'/>
					</div>
					<span class="nav-empty"></span>
					<span class="nav-empty"></span>
					<span class="nav-item"><Link to="/personal-projects/" class="anchor">Personal Projects</Link></span>
					<span class="nav-item"><Link to="/knowledge-and-skills/" class="anchor">Knowledge and Skills</Link></span>
					<span class="nav-item"><Link to="/hobbies-and-interests/" class="anchor">Hobbies and Interests</Link></span>
	        	</div>
			</div>
		)
	}
}

export default Header;