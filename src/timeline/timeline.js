import React, { Component } from 'react';
import TimelineElement from './timeline-element/timeline-element'

class Timeline extends Component {
	render() {
		return(
			<div>
				<TimelineElement/>
				<TimelineElement/>
				<TimelineElement/>
			</div>			
			);
	}
}

export default Timeline;