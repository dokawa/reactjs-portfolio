import React, { Component } from 'react';
import './investing.css';


class Investing extends Component {
	render() {
		return (
			<div class='investing-container'>
				<div><a href="https://www.easynvest.com.br/"><img class="logo-icon" src= { require('assets/images/hobbies-and-interests/investing/easynvest-logo.png') } /></a></div>
				<div><a href="https://www.clear.com.br/site"><img class="logo-icon" src= { require('assets/images/hobbies-and-interests/investing/clear-logo.png') } /></a></div>
				<div><a href="https://www.clear.com.br/site"><img class="logo-icon" src= { require('assets/images/hobbies-and-interests/investing/rico-logo.png') } /></a></div>
				<div><a href="https://www.binance.com/?ref=11130872"><img class="logo-icon" src= { require('assets/images/hobbies-and-interests/investing/binance-logo.png') } /></a></div>
			</div>
		)
	}
}

export default Investing;