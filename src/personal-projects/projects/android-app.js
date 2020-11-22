import React, { Component } from 'react';
import 'personal-projects/projects/android-app.css';
import user_icon from 'assets/images/user_icon.png';
import Star from 'personal-projects/projects/star';

class AndroidApp extends Component{

	render() {
		return (
			<div class="android-app-wrapper">
				<div class="android-app-title">{ this.props.title }</div>
				<div class="android-app-description">
					<div class="android-app-info"> 
						<div class="android-app-numeric-rating">{ this.props.rating_info[0] }</div>
						<div class="android-app-rating">
							{ this.renderStars(this.props.rating_info[0]) }
						</div>
						<div><img src= { user_icon }/> { this.props.rating_info[1] } total</div>
					</div>
					<div class="android-app-text">Play Store details: { this.props.rating_info[2] } active users more than { this.props.rating_info[3] } downloads - Data from 01/2019 – has since been decomissioned. { this.buildTextFromLinebreaker(this.props.description) }</div>
				</div>
				{ this.buildAndroidAppElement(this.props.image_list) }
				{ this.props.year }
			</div>
		);
	}


	renderStars(rating) {
		let i;
		let stars = [];
		for (i = 0; i < Math.floor(rating); i++) {
			stars[i] = <div class="android-app-star">{ <Star value= { 100 } /> }</div>;
		}
		let last_star = this.getLastStar(rating);
		stars.push(last_star);
		return(stars);
	}

	getLastStar(rating) {
		let rest = (rating - Math.floor(rating)).toFixed(1);
		console.log(Math.floor(rating));
		console.log(rest);
		if (rest == 0.1) {
			return(<div class="android-app-star">{ <Star value= { 10 } /> }</div>);
		}
		else if (rest == 0.6) {
			return(<div class="android-app-star">{ <Star value= { 60 } /> }</div>);
		}
		else if (rest == 0.7) {
			return(<div class="android-app-star">{ <Star value= { 70 } /> }</div>);
		}
		else {
			throw("Rating value not defined");
		}
	}


	buildTextFromLinebreaker = (text) => {
		const splittedText = text.split('\n');
				console.log(splittedText)
		return splittedText.map((text, i) => <div class="android-app-text" id={i}>{text}</div>)
	}

	buildAndroidAppElement(image_list) {
		return 	(<div class="android-app-wrapper">
					{ image_list.map((img, i) => <img class="android-app-screenshot" key={ i } src={ img } />) }
				</div>
		);
	}
}

export default AndroidApp;