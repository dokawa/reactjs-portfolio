import React, { Component } from 'react';
import './timeline-element.css'

class TimelineElement extends Component {
	// constructor(props) {
	//     super(props);
	    // this.year = "2018";
	    // this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
	    // Nulla et nulla non velit sagittis molestie sed a tellus. \
	    // Etiam dui odio, tristique ac ornare id, dignissim et ex. \
	    // Etiam mattis consequat ultrices. Curabitur lorem purus, \
	    // faucibus sit amet faucibus at, aliquet ut leo. Fusce tempus mi vel nibh interdum, ";
	    // vitae vulputate mi accumsan. Nunc scelerisque ut nulla quis porta. In porttitor erat eget lacinia porta. "
	//     Duis semper justo eu turpis pellentesque euismod. Quisque eros eros, pulvinar at nulla quis, finibus aliquet purus. \
	//     Praesent luctus mollis aliquam. Duis erat sapien, gravida et urna sed, suscipit auctor leo. ";
	// 
	// }

	render() {
		return (
			<div class="wrapper">
				<div class="timeline">
					<span class="inline"> { this.props.year } </span>
					<div class="circle-container">
						<div class="circle"/>
					</div>
					<span class="inline"> { this.props.text } </span>
				</div>
				
			</div>
			)
	}
}

export default TimelineElement;