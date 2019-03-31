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
			<div class="timeline-element-wrapper">
				<div class="timeline-element">
					<span class="year"> { this.props.year } </span>
					<svg width="20" height="100%">
					<circle cx="10" cy="10" r="3" stroke="#444444"  fill="#444444" />
  						<line x1="10" y1="0" x2="10" y2="100%" stroke="#444444"/>
					</svg>
			
					<span class="text"> { this.props.text } </span>
				</div>
				
			</div>
			)
	}
}

export default TimelineElement;