import React, { Component } from 'react';
import karate from 'assets/images/hobbies-and-interests/karate/karate-graph.png';
import 'hobbies-and-interests/karate/karate.css';

class Karate extends Component {
	render() {
		return (
			<div>
				<div class="karate-title">KARATE</div>
				<div class="karate-image">
					<img class="karate-graph" src= { karate } />
				</div>

			</div>
		)
	}
}

export default Karate;