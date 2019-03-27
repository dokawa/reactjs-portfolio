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
				<div class="container">

					
				</div>


				<div id='header'>
					
					<div class='name-and-picture'>
						
						
						<img src= { picture } class='picture'/>
					</div>
				</div>
				<h1></h1>
				<h1><p class="text"></p></h1>
				<script>
					  var height = $('.background').height();
					  $('.text').text(height)
				</script>
				
			</div>
			)
	}
}

export default Header;