import React, { Component } from 'react';
import shotokan from 'assets/images/hobbies-and-interests/karate/shotokan.png';
import 'hobbies-and-interests/karate/karate.css';

class Karate extends Component {
	render() {
		return (
			<div>
				<div class="karate-title">KARATE</div>
				<div>I've been training Shotokan traditional Karate for more than 4 years.
					For most people, Karate is often taken as sports Karate due to competition appeareances in media, but there are significant differences between
					traditional Karate and sports Karate.
					In traditional Karate we train a wide variety of techniques not only those allowed in championships. 
					These techniques are trained with focus in their effectiveness and not merely on their aesthetical aspect.
					In sports Karate the goal is to score points, so it focus in speed over impact of strikes.
					The goal in traditional Karate is personal development with no encouragement to concern about victory or defeat.
					</div>
				<div class="karate-image">

					<img class="karate-logo" src= { shotokan } alt="Shotokan logo"/>

				</div>

			</div>
		)
	}
}

export default Karate;