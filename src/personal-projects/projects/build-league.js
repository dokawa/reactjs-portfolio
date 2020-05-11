import React, { Component } from 'react';
import AndroidApp from 'personal-projects/projects/android-app';
import MainScreenScreenshot from 'assets/images/league-apps-screenshots/build-league-screenshots/build_league_main_screen.png';
import CharacterBuildScreenshotPartOne from 'assets/images/league-apps-screenshots/build-league-screenshots/build_league_character_build_1.png';
import CharacterBuildScreenshotPartTwo from 'assets/images/league-apps-screenshots/build-league-screenshots/build_league_character_build_2.png';
import CharacterBuildScreenshotPartThree from 'assets/images/league-apps-screenshots/build-league-screenshots/build_league_character_build_3.png';

class BuildLeague extends Component {
	constructor(props) {
  		super(props);

        this.state = 
        	{ title: "Build League 2019", year: "2016 - 2019", description: "Co-developed an app that helps players of the game \“League of Legends\” by showing a default set of items to buy for each character, item information, skill order of improvement and rune configuration.\nCreated the architecture and design of the app. Item information is scrapped from de oficial site.",
		};     
    }

	render() {
		return (
			<AndroidApp class="android-app-title" title = { this.state.title } year = { this.state.year } description = { this.state.description } 
			image_list = { [MainScreenScreenshot, CharacterBuildScreenshotPartOne, CharacterBuildScreenshotPartTwo, CharacterBuildScreenshotPartThree] } rating_info = { [4.7, 1862, 2673, 100000] } />
		);
	}


}

export default BuildLeague;