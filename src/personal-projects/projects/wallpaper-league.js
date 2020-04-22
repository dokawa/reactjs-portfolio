import React, { Component } from 'react';
import AndroidApp from 'personal-projects/projects/android-app';
import 'personal-projects/projects/android-app.css'
import MainScreenScreenshot from 'assets/images/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_main_screen.png';
import CharacterWallpaperScreenshot from 'assets/images/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_character_wallpapers.png';
import CharacterWallpaperEditScreenshot from 'assets/images/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_wallpaper_edit.png';

class WallpaperLeague extends Component {
	constructor(props) {
  		super(props);

		this.state = 
			{ title: "Wallpaper League 2019", year: "2016 - 2019", description: "Participou do desenvolvimento do aplicativo Android “Wallpaper LOL 2018”\nAplicativo que auxilia os usuários a encontrar e colocar as imagens dos personagens de “League of Legends” como wallpaper do smartphone\nCriou a conexão do aplicativo com a API do jogo com “Glide” para baixar as imagens\nExtendeu uma biblioteca Android para edição de imagens utilizando GPU, implementando função de ajuste de cor, saturação e brilho (hue, brightness, saturation)\nDetalhes da “Play Store”: 4.60 estrelas de 594 avaliações e 985 usuários ativos - Dados de 01/2019 – descomissionado desde então" };

			}

	render() {
		return (
			<AndroidApp title = { this.state.title } year = { this.state.year } description = { this.state.description } image_list = { [MainScreenScreenshot, CharacterWallpaperScreenshot, CharacterWallpaperEditScreenshot] } rating = { 4.6 } />
		);
	}
}

export default WallpaperLeague;