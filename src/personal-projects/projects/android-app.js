import React, { Component } from 'react';
import './android-app.css';

class AndroidApp extends Component{
	constructor(props) {
  		super(props);
  	}
	render() {
		return (
			<div class="android-app-wrapper">
				<div class="android-app-description"> { this.buildTextFromLinebreaker(this.props.description) } </div>
				{ this.buildAndroidAppElement(this.props.title, this.props.image_list)}
				{ this.props.year }
			</div>
		);
	}

	buildTextFromLinebreaker = (text) => {
		const splittedText = text.split('\n');
				console.log(splittedText)
		return splittedText.map((text, i) => <div class="android-app-text" id={i}>{text}</div>)
	}

	buildAndroidAppElement(title, image_list) {
		return 	(<div class="android-app-wrapper">
					<div class="android-app-title"><h1>{ title }</h1> </div>
					{ image_list.map((img, i) => <img class="android-app-screenshot" key={ i } src={ img } />) }
				</div>
		);
	}
}

export default AndroidApp;