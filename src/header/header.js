import React, { Component } from 'react';
import 'header/header.css';

import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div class = "header">
				<div class="nav">
						<span class="nav-item"><Link to="/experience/" class="anchor">Experience</Link></span>
						<span class="nav-item"><Link to="/education/" class="anchor">Education</Link></span>
						<span class="nav-item"><Link to="/personal-projects/" class="anchor">Personal Projects</Link></span>
						<span class="nav-item"><Link to="/knowledge-and-skills/" class="anchor">Knowledge and Skills</Link></span>
						<span class="nav-item"><Link to="/hobbies-and-interests/" class="anchor">Hobbies and Interests</Link></span>
	        	</div>
				<Router>
        		</Router>
			</div>
		)
	}
}

export default Header;