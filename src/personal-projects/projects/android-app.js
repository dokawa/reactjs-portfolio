import React, { Component } from 'react';
import './android-app.css';

class AndroidApp extends Component{
	constructor(props) {
  		super(props);
  	}
	render() {
		return (
			<div class="android-app-wrapper">
				<h1>{ this.props.title }</h1> 
				<div class="android-app-description"> { this.buildTextFromLinebreaker(this.props.description) } </div>
				{ this.props.year }
			</div>
		);
	}

	buildTextFromLinebreaker = (text) => {
		const splittedText = text.split('\n');
				console.log(splittedText)
		return splittedText.map((text, i) => <div class="android-app-text" id={i}>{text}</div>)
	}
}

export default AndroidApp;