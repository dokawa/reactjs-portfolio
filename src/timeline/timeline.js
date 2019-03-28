import React, { Component } from 'react';
import TimelineElement from './timeline-element/timeline-element'

class Timeline extends Component {
	render() {
		return(
			<div>
				<TimelineElement year = { "2018" } text = { "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				    Nulla et nulla non velit sagittis molestie sed a tellus. \
				    Etiam dui odio, tristique ac ornare id, dignissim et ex. \
				    Etiam mattis consequat ultrices. Curabitur lorem purus, \
				    faucibus sit amet faucibus at, aliquet ut leo. Fusce tempus mi vel nibh interdum,  \
	    			vitae vulputate mi accumsan. Nunc scelerisque ut nulla quis porta. In porttitor erat eget lacinia porta. " } />
				<TimelineElement year = { "2019" } text = { "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				    Nulla et nulla non velit sagittis molestie sed a tellus. \
				    Etiam dui odio, tristique ac ornare id, dignissim et ex. \
				    Etiam mattis consequat ultrices. Curabitur lorem purus, \
				    faucibus sit amet faucibus at, aliquet ut leo. Fusce tempus mi vel nibh interdum,  \
	    			vitae vulputate mi accumsan. Nunc scelerisque ut nulla quis porta. In porttitor erat eget lacinia porta. " } />
				<TimelineElement year = { "2017" } text = { "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				    Nulla et nulla non velit sagittis molestie sed a tellus. \
				    Etiam dui odio, tristique ac ornare id, dignissim et ex. \
				    Etiam mattis consequat ultrices. Curabitur lorem purus, \
				    faucibus sit amet faucibus at, aliquet ut leo. Fusce tempus mi vel nibh interdum,  \
	    			vitae vulputate mi accumsan. Nunc scelerisque ut nulla quis porta. In porttitor erat eget lacinia porta. " } />
			</div>			
			);
	}
}

export default Timeline;