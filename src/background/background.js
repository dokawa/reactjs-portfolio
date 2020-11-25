import React, { Component } from 'react';
import './background.css'
import BackgroundImage from 'assets/images/background.png'

class Background extends Component {
	render() {
		return(
			<div class="outer">
				<img class="background" src= { BackgroundImage } alt="Background"/>
			  	<div class="middle">
			    	<div class="inner">
			    		<div class="name">Daniel Akio Okawa</div>
			      		<div class="subtitle">RESEARCH AND INOVATION ANALYST</div>
			    	</div>
			  	</div>
			</div>
		)
	}
}

export default Background;