import React, { Component } from 'react';
import 'personal-projects/projects/android-app.css';
import star_full from 'assets/images/star_full.png';
import star_0_1 from 'assets/images/star_0_1.png';
import star_0_6 from 'assets/images/star_0_6.png';
import star_0_7 from 'assets/images/star_0_7.png';
import user_icon from 'assets/images/user_icon.png';

class AndroidApp extends Component{
	constructor(props) {
  		super(props);
  	}
	render() {
		return (
			<div class="android-app-wrapper">
				<div class="android-app-title">{ this.props.title }</div>
				<div class="rating">
					{ this.renderStars(this.props.rating_info[0]) }
					<div> { this.props.rating_info[2] } <img src= { user_icon }/> </div>
				</div>
				<div class="android-app-description"> Detalhes da “Play Store”: { this.props.rating_info[0] } estrelas de { this.props.rating_info[1] } avaliações e { this.props.rating_info[2] } usuários ativos - Dados de 01/2019 – descomissionado desde então </div>
				<div class="android-app-description"> { this.buildTextFromLinebreaker(this.props.description) } </div>
				{ this.buildAndroidAppElement(this.props.image_list) }
				{ this.props.year }

			</div>
		);
	}


	renderStars(rating) {
		let i;
		let stars = [];
		for (i = 0; i < Math.floor(rating); i++) {
			stars[i] = <div><img src= { star_full } /></div>;
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
			return(<div><img src= { star_0_1 } /></div>);
		}
		else if (rest == 0.6) {
			return(<div><img src= { star_0_6 } /></div>);
		}
		else if (rest == 0.7) {
			return(<div><img src= { star_0_7 } /></div>);
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