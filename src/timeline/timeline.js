import React, { Component } from 'react';
import TimelineElement from './timeline-element/timeline-element'

class Timeline extends Component {
	render() {
		return(
			<div>
				{ this.buildTimeline() }
			</div>			
			);
	}

	buildTimeline() {
		console.log(this.props.entries);
		if (!this.props.entries) {
			return;
		}
		return this.props.entries.map(entry => {
			return <TimelineElement year = { entry.year } text = { entry.text }/>
		});

	}
}

export default Timeline;