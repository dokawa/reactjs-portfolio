import React, { Component } from 'react';
import AndroidApp from './android-app';
import './android-app.css'
import MainScreenScreenshot from '../../assets/images/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_main_screen.png';
import CharacterWallpaperScreenshot from '../../assets/images/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_character_wallpapers.png';
import CharacterWallpaperEditScreenshot from '../../assets/images/league-apps-screenshots/wallpaper-league-screenshots/wallpaper_league_wallpaper_edit.png';

class WallpaperLeague extends Component {
	constructor(props) {
  		super(props);

		this.state = 
			{ title: "Wallpaper League 2019", year: "2016 - 2019", description: "Participou do desenvolvimento do aplicativo Android \“Wallpaper League 2019\”\nAplicativo que ajuda o jogador a escolher a melhor combinação no jogo “League of Legends”\nCriou a infraestrutura de votação utilizando instância EC2 (Elastic Computing Cloud) e RDS\n(Relational Database Service) \nDetalhes da “Play Store”: 4.14 estrelas de 562 avaliações e 832 usuários ativos" };

			}

	render() {
		return (
			<div class="android-app-wrapper">
				<AndroidApp title = { this.state.title } year = { this.state.year } description = { this.state.description }/>
				<img class="android-app-screenshot" src={ MainScreenScreenshot } />
				<img class="android-app-screenshot" src={ CharacterWallpaperScreenshot } />
				<img class="android-app-screenshot" src={ CharacterWallpaperEditScreenshot } />
			</div>
		);
	}
}

export default WallpaperLeague;