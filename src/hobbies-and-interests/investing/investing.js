import React, { Component } from 'react';
import 'hobbies-and-interests/investing/investing.css';


class Investing extends Component {
	render() {
		return (
			<div class="investing-container">
				<div class="investing-title">INVESTING</div>
				<div><a href="https://www.easynvest.com.br/"><img class="logo-icon" src= { require('assets/images/hobbies-and-interests/investing/easynvest-logo.png') } alt="Easynvest logo"/></a></div>
				<div class="investing-description">This broker has no custody fees for Treasure bonds and Certificate of Deposit (CD), also their CDs have better interest rates. I try to keep 22% of my portfolio</div>
				<div><a href="https://www.clear.com.br/site"><img class="logo-icon" src= { require('assets/images/hobbies-and-interests/investing/clear-logo.png') } alt="Clear logo"/></a></div>
				<div class="investing-description">This broker has no brokerage fees. I try to keep 73% of my portfolio in stocks</div>
				<div><a href="https://www.rico.com.vc/"><img class="logo-icon" src= { require('assets/images/hobbies-and-interests/investing/rico-logo.png') } alt="Rico logo"/></a></div>
				<div class="investing-description">Although this broker has brokerage fees, their stock lease is better than the others</div>
				<div><a href="https://www.binance.com/?ref=11130872"><img class="logo-icon" src= { require('assets/images/hobbies-and-interests/investing/binance-logo.png') } alt="Binance logo" /></a></div>
				<div class="investing-description">THIS IS NOT INVESTING. That said I use 5% of my portfolio to some speculation in cryptocurrencies</div>
			</div>
		)
	}
}

export default Investing;