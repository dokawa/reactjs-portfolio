import React, { Component } from 'react';
import 'personal-projects/projects/android-app.css';

class AndroidApp extends Component{
	constructor(props) {
  		super(props);
  	}
	render() {
		return (
			<div class="android-app-wrapper">
				<div class="android-app-title"><h1>{ this.props.title }</h1></div>
				<div class="android-app-description"> { this.buildTextFromLinebreaker(this.props.description) } </div>
				{ this.buildAndroidAppElement(this.props.image_list) }
				{ this.props.year }
			</div>
		);
	}

	buildTextFromLinebreaker = (text) => {
		const splittedText = text.split('\n');
				console.log(splittedText)
		return splittedText.map((text, i) => <div class="android-app-text" id={i}>{text}</div>)
	}

	buildAndroidAppElement(image_list) {
		return 	(<div class="android-app-wrapper">
					{ image_list.map((img, i) => <img class="android-app-screenshot" key={ i } src={ img } />) }
				</div>
		);
	}
}

export default AndroidApp;