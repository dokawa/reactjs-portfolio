import React, { Component } from 'react';
import './timeline-element.css'

class TimelineElement extends Component {

	render() {
		return (
			<div class="timeline-element-wrapper">
				<div class="timeline-element">
					<span class="year"> { this.props.year } </span>
					
					<div class="line-divider">
						
							<svg width="20" height="auto">
							<circle cx="10" cy="45" r="3" stroke="#444444"  fill="#444444" />
							</svg>
						
						<div class="line-element"></div>
					</div>
					
					<span class="text"> { this.props.text } </span>
				</div>
				
			</div>
			)
	}
}

export default TimelineElement;