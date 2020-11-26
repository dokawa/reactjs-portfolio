import React, { Component } from 'react';
import AndroidApp from 'personal-projects/projects/android-app';
import 'personal-projects/projects/android-app.css'
import MainScreenScreenshot from 'assets/images/personal-projects/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_main_screen.png';
import CharacterWallpaperScreenshot from 'assets/images/personal-projects/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_character_wallpapers.png';
import CharacterWallpaperEditScreenshot from 'assets/images/personal-projects/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_wallpaper_edit.png';

class WallpaperLeague extends Component {
	constructor(props) {
  		super(props);

		this.state =
			{ title: "Wallpaper League 2019", year: "2016 - 2019", description: "Co-developed an app that takes “League of Legends” character images to be used as wallpaper of the smartphone.\nCreated the architecture, design of the app and connection with the game API and the library “Glide” to download images.\nExtended an Android image edition library that uses the GPU, implementing hue, brightness and saturation adjustments.\n" };

			}

	render() {
		return (
			<AndroidApp title = { this.state.title } year = { this.state.year } description = { this.state.description } image_list = { [MainScreenScreenshot, CharacterWallpaperScreenshot, CharacterWallpaperEditScreenshot] } rating_info = { [4.6, 594, 985, 50000] } />
		);
	}
}

export default WallpaperLeague;