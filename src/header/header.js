import React, { Component } from 'react';
import picture from '../assets/images/picture.jpg'
import background from '../assets/images/background.jpg'
import './header.css'
import Timeline from '../timeline/timeline'

class Header extends Component {
	render() {
		return (
			<div>
				<div class='background'/>		
					<div class="outer">
					  	<div class="middle">

					    	<div class="inner">
					    		<h1 class="name">Daniel Akio Okawa</h1>
					      		<h1 class="subtitle">ANALISTA DE PESQUISA E INOVAÇÃO</h1>
					    	</div>
					  	</div>
					</div>
				<div id='header'>
					<span class="nav-item"></span>
					<span class="nav-item">Experience</span>
					<span class="nav-item">Education</span>
					<span class="space"></span>
					<img src= { picture } class='picture'/>
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