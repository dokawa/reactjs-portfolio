import React, { Component } from 'react';
import TimelineElement from './timeline-element/timeline-element'
import './timeline.css';

class Timeline extends Component {
	render() {
		return(
			<div>
				{ this.buildTitle() }
				{ this.buildTimeline() }
			</div>			
			);
	}

	buildTitle() {
		return <div class="title"> { this.props.title }</div>
	}


	buildTimeline() {
		console.log(this.props.entries);
		if (!this.props.entries) {
			return;
		}
		return this.props.entries.map(entry => <TimelineElement year = { entry.year } text = { entry.text }/>);
	}
}

export default Timeline;