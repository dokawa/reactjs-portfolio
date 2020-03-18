import React, { Component } from 'react';
import 'personal-projects/projects/project.css';

class Project extends Component{
	constructor(props) {
  		super(props);
  	}
	render() {
		return (
			<div class="project-wrapper">
				<div class="project-title"><h1>{ title }</h1></div>
				<div class="project-description"> { this.buildTextFromLinebreaker(this.props.description) } </div>
				{ this.buildProjectElement(this.props.image_list)}
				{ this.props.year }
			</div>
		);
	}

	buildTextFromLinebreaker = (text) => {
		const splittedText = text.split('\n');
				console.log(splittedText)
		return splittedText.map((text, i) => <div class="project-text" id={i}>{text}</div>)
	}

	buildProjectElement(image_list) {
		return 	(<div class="project-wrapper">
					{ image_list.map((img, i) => <img class="project-image" key={ i } src={ img } />) }
				</div>
		);
	}
}

export default Project;