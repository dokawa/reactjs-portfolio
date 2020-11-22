import React, { Component } from 'react';
import 'personal-projects/projects/star.css';


class Star extends Component {

	render() {
		return(
			<div class="star-container">
				<div class="star" style = {{ width: this.props.value * 0.16 }}>
				</div>
			</div>
		);
	}
}

export default Star;