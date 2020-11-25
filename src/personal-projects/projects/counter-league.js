import React, { Component } from 'react';
import AndroidApp from 'personal-projects/projects/android-app';
import MainScreenScreenshot from 'assets/images/league-apps-screenshots/counter-league-screenshots/counter_league_main_screen.png';
import CharacterCounterScreenshot from 'assets/images/league-apps-screenshots/counter-league-screenshots/counter_league_character_counters.png';

class CounterLeague extends Component {
	constructor(props) {
  		super(props);

		this.state = 
			{ title: "Counter League 2019", year: "2016 - 2019", description: "Co-developed an app that helps the player pick a character that is strong against the enemy character - counter - for the “League of Legends” game.\nCreated the architecture of the app, design and the backend voting structure in an AWS EC2 instance (Elastic Computing Cloud) and RDS. (Relational Database Service).\n" };
		}

	render() {
		return (
				<AndroidApp title = { this.state.title } year = { this.state.year } description = { this.state.description } image_list = { [MainScreenScreenshot, CharacterCounterScreenshot] } rating_info = { [4.1, 562, 832, 50000] } />
		);
	}
}

export default CounterLeague;